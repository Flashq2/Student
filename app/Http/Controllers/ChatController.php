<?php

namespace App\Http\Controllers;

use App\MainSystem\system;
use App\Models\ChatConnectionModel;
use App\Models\ChatModel;
use App\Models\MessageModel;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Pusher\Pusher;
use Symfony\Component\CssSelector\Node\FunctionNode;

class ChatController extends Controller
{
    public $page_id ;
    public $page;
    public $system ;
    public $prefix;
    public $pusher;
    public $options;
    function __construct(){
        $this->page_id = "10006";
        $this->page = "My Message";
        $this->system = new system();
        $this->prefix = "chat";
        $this->options = array('cluster' => 'ap1','encrypted' => true);
        $this->pusher = new Pusher(
            env('PUSHER_APP_KEY'),
            env('PUSHER_APP_SECRET'),
            env('PUSHER_APP_ID'),
            $this->options
        );
    }
    public function index(){
        try{
            $user = Auth::user()->email;
            if(!$user) return view('auth.login');
            $col_record = $this->system->getField($this->page_id);
            $record = ChatModel::paginate(10);
            $connection = ChatConnectionModel::where('connection_from',$user)
            ->where('is_block_connection','No')
            ->where('connection','message')
            ->get();
            $page = $this->page;
            $page_id = $this->page_id;
            $prefix = $this->prefix;
            $chat = $connection->pluck('connection_to')->toArray();
            return view('admin.chat_v2.chat_list',compact('col_record','record','page','page_id','prefix','connection','chat'));
        }catch (Exception $ex){
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }

    }

    public function DoSearchNewUser(Request $request){
        try{
            $data = $request->all();
            $value = trim($data['value']);
            $user = Auth::user()->email;
            $record = User::where('email','<>',$user)
            ->where(function($query) use($value){
               $query->where('email','Like','%'.$value.'%')->orWhere('name','Like','%'.$value.'%');
            })->get();
            $view = view('admin.chat_v2.list_new_user',compact('record'))->render();
            return response()->json([
                'status'=> 'success',
                'view' =>$view,
            ]);
        }catch (Exception $ex){
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }
    }
    public function createConnection(Request $request){
        DB::beginTransaction();
        try{
            $data = $request->all();
            $value=mb_convert_encoding($data['value'], 'UTF-8', 'UTF-8');
            $user = Auth::user()->email;
            $uuid = openssl_random_pseudo_bytes(10); 
            $id = bin2hex($uuid); // Random SSL value for generate file name
            
            // Create Connection for user   
            $connection = new ChatConnectionModel();
            $connection->id =  $id ;
            $connection->connection = 'message';
            $connection->connection_with = $value;
            $connection->connection_to = $value;
            $connection->connection_from = $user;
            $connection->is_block_connection = 'No';
            $connection->save();
            // Generate new Connectioin for another User
           
            $uuid = openssl_random_pseudo_bytes(10); 
            $uuid = bin2hex($uuid); 
            $connection = new ChatConnectionModel();
            $connection->id = $uuid ;
            $connection->connection = 'message';
            $connection->connection_with = $user;
            $connection->connection_to = $user;
            $connection->connection_from = $value;
            $connection->is_block_connection = 'No';
            $connection->save();
            DB::commit();
            $connection = ChatConnectionModel::where('connection_from',$user)
            ->where('id',$id)
            ->where('is_block_connection','No')
            ->where('connection','message')
            ->get();
            $view = view('admin.chat_v2.append_new_chat',compact('connection'))->render();
            return response()->json([
                'status'=> 'success',
                'view' =>$view
            ]);


        }catch (Exception $ex){
            DB::rollBack();
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }
    }

    public function showMessage(Request $request){
        DB::beginTransaction();
        try{
            $data = $request->all();
            $id = $data['id'];
            $from = $data['connection_from'];
            $to = $data['connect_to'];
            $with = $data['connection_with'];
            $user_detail = Auth::user()->email;
            $user = User::where('email',$to)->first();
            $current_user = User::where('email',$from)->first();
            $connection = ChatConnectionModel::where('connection_from',$user_detail)
            ->where('is_block_connection','No')
            ->where('connection','message')
            ->where('connection_with',$to)
            ->get()->pluck('id')->toArray();
            if(!$user) return response()->json(['status' => 'warning' , 'msg' => 'Sorry, Something went wrong !']);
            $message = MessageModel::where(function($query) use($user_detail,$to,$from){
               $query->whereIn('from_user',[$from,$to])->WhereIn('to_user',[$from,$to]);
            })->paginate(20);
            $view = view('admin.chat_v2.message',compact('user','message','current_user','connection'))->render();
            return response()->json(['status' => 'success' , 'view' => $view]);
        }catch (Exception $ex){
            DB::rollBack();
            $send = $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }
    }

    public function sendMessage(Request $request){
        DB::beginTransaction();
        try{
            $data = $request->all();
            $to_user = $data['user'];
            $text_data = $data['message'];
            if(!$text_data) return;
            $user_detail = Auth::user()->email;
            $user = User::where('email',$to_user)->first();
            if(!$user) return response()->json(['status' => 'warning' , 'msg' => 'Sorry, Something went wrong !']);
            $message = new MessageModel();
            $message->from_user = Auth::user()->email;
            $message->to_user = $to_user ;
            $message->is_active = "Yes";
            $message->is_delete = 'No';
            $message->message_type = 'Text';
            $message->send_from_type = 'Personal';
            $message->message_data = $text_data;
            $message->save();
            DB::commit();
            $connection = ChatConnectionModel::where('connection_from',$user_detail)
            ->where('is_block_connection','No')
            ->where('connection','message')
            ->where('connection_with',$to_user)
            ->get()->pluck('id')->toArray();  

            $connection_with = ChatConnectionModel::where('connection_from',$to_user)
            ->where('is_block_connection','No')
            ->where('connection','message')
            ->where('connection_with',$user_detail)
            ->get()->pluck('id')->toArray(); 
            $messages = MessageModel::where('id',$message->id)->first();
            // dd($connection_with[0]);
            // Begin Trigger Pusher
            $data['created_at'] = Carbon::now()->diffForHumans();
            $data['from'] = Auth::user()->name;
            $data['to'] = $to_user;
            $data['connection']  = $connection_with[0];
            $data['to_id'] =  $user->id;
            $data['message'] = $text_data;
            $data['view'] = view('admin.chat_v2.pusher_generate_message',compact('data'))->render();
            $this->pusher->trigger("chat_to_$connection_with[0]", 'chat', $data);
            //End Trigger Pusher

           
            $view = view('admin.chat_v2.message_row_left',compact('user','messages'))->render();
            return response()->json(['status' => 'success' , 'view' => $view,'user'=>$connection]);
        }catch (Exception $ex){
            DB::rollBack();
            $send = $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }
    }

    public function pusherConnection(Request $request){
        try{
            $user = Auth::user()->email;
            if(!$user) return view('auth.login');
            $connection = ChatConnectionModel::where('connection_from',$user)
            ->where('is_block_connection','No')
            ->where('connection','message')
            ->get()->pluck('id')->toArray();   
            return response()->json(['status' => 'success' , 'connection' =>$connection ]);
        }catch (Exception $ex){
            DB::rollBack();
            $send = $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }
    }

}
