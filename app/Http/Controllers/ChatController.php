<?php

namespace App\Http\Controllers;

use App\MainSystem\system;
use App\Models\ChatModel;
use Exception;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public $page_id ;
    public $page;
    public $system ;
    public $prefix;
    function __construct(){
        $this->page_id = "10006";
        $this->page = "My Message";
        $this->system = new system();
        $this->prefix = "chat";
    }
    public function index(){
        try{
            $col_record = $this->system->getField($this->page_id);
            $record = ChatModel::paginate(10);
            $page = $this->page;
            $page_id = $this->page_id;
            $prefix = $this->prefix;
                return view('admin.chat.chate_list',compact('col_record','record','page','page_id','prefix'));
        }catch (Exception $ex){
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }

    }
    // public function index(){
        
    // }
}
