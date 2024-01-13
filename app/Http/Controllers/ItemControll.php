<?php

namespace App\Http\Controllers;

use App\Models\ItemModel;
use App\MainSystem\system;
use Illuminate\Http\Request;
use App\Models\ItemSpecModel;
use App\Models\ItemAttributeModel;
use App\Models\ItemPicturesModal;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class ItemControll extends Controller
{
    public $page_id ;
    public $page;
    public $system ;
    public $prefix;
    public $arrayJoin = [];
    function __construct(){
        $this->page_id = "10001";
        $this->page = "Item";
        $this->system = new system();
        $this->prefix = "item";
        $this->arrayJoin = ['10001','10007','10008'];
    }
    public function index(){
        $page = $this->page;
        $col_record = $this->system->getField($this->page_id);
        $record = ItemModel::where('code','<>','Yes')->paginate(15);
            $record->setCollection(
                $record->getCollection()->transform(function ($item) {
                    $item->edit_code = $this->system->Encr_string($item->code) ;
                return $item;
                })
            );
            
        $prefix = $this->prefix;
        $link_record = url('/item/item_card');
        return view('admin.item.item_list',compact('page','col_record','record','prefix','link_record'));
    }
    public function transection(){
        // Auth::logout();
        $page = $this->page;
        $prefix = $this->prefix;
        $col_record = $this->system->getFieldJoin($this->arrayJoin);
        $record = null;

        // dd($this->system->HasColumn('item_attribute','description'));
        if(isset($_GET['code'])){
            $all_records = new Collection;
            $record = ItemModel::where('code',$this->system->Decr_string($_GET['code']))->first();
            $item_attr = ItemAttributeModel::where('code',$this->system->Decr_string($_GET['code']))->first();
            // dd($this->system->Decr_string($_GET['code']));
            foreach($col_record as $col){
                if($this->system->HasColumn('item_attribute',$col->filed_name)){
                    $record[$col->filed_name] = $item_attr[$col->filed_name];
                }
            }
        } 
        
        return view('admin.item.item_card',compact('page','prefix','col_record','record'));
    }
    public function create(Request $request){
        DB::beginTransaction();
        try {
            $data = $request->all();
            $last = ItemModel::latest('id')->first();
            $last = $last ?? 0;
            $code = $data['code'];
            if(trim($code) == '') $code = $last->id+1;
            $check = ItemModel::where('code',$code)->first();
            if($check) return response()->json(['status' => 'warning' , 'msg' => 'Item Code already exit!']);
            $item = new ItemModel();
            $item_attr = new ItemAttributeModel();
            $item->code = $code;
            $item_attr->code = $code;
            $item->save();
            $item_attr->save();
            $enc = $this->system->Encr_string($code,null,null) ;
            $url = url('item/item_card?para=item&group=items&type=up&code='.$enc);
            DB::commit();
            return response()->json(['status' => 'success' , 'url' => $url]);

        } catch (\Exception $ex){
            DB::rollBack();
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }

    }

    public function update(Request $request){
        DB::beginTransaction();
        try{
            $data = $request->all();
            $col_record = $this->system->getFieldJoin($this->arrayJoin);
            $code = $this->system->Decr_string($data['is_code']);
            $item = ItemModel::where('code',$code)->first();
            $item_attr = ItemAttributeModel::where('code',$code)->first();
            foreach ($col_record as $value) {
                 if(isset($data[$value->filed_name])){
                    if($this->system->HasColumn('items',$value->filed_name) && $item  ){
                        $item[$value->filed_name] = $data[$value->filed_name];
                    }elseif($this->system->HasColumn('item_attribute',$value->filed_name) && $item_attr){
                        $item_attr[$value->filed_name] = $data[$value->filed_name];
                    }
                 }
            }
            $item->save();
            $item_attr->save();
            DB::commit();
            return response()->json(['status' => 'success' , 'msg' => "Your changes have been successfully saved!"]);
        }catch (\Exception $ex){
            DB::rollBack();
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }
    }
    public function modalImage(Request $request){
        try {
            $code = $request->code;
            $record = null;
            $record = ItemPicturesModal::where('code',$this->system->Decr_string($code,null,null))->get();
            $view =view('admin.item.modal_item_picture',compact('code','record'))->render();
            return response()->json(['status' => 'success','view' => $view]);
        } catch (\Exception $ex) {
             
        }
    }
    public function UploadImage(Request $request){
        DB::beginTransaction();
        try {
            $data = $request->all();
            $code = $this->system->Decr_string($data['code'],null,null);
            $upload_path = 'upload/'.$code;
            $item_picture = new ItemPicturesModal();
            if (!file_exists($upload_path)) {
                mkdir($upload_path, 0777, true);
            }
            $fileName = $_FILES["file"]['name'];
            $fileTmpLoc = $_FILES["file"]["tmp_name"];
            $kaboom = explode(".", $fileName);
            $fileExt = end($kaboom);
            $token = openssl_random_pseudo_bytes(20);
            $token = bin2hex($token);
            $fname = $token . '.' . $fileExt;
            $moveResult = move_uploaded_file($fileTmpLoc, $upload_path . "/" . $fname);
             if($moveResult){
                $http = $request->getSchemeAndHttpHost();
                $file_path = $http.'/'. $upload_path . "/" . $fname ;
                $item_picture->picture_ori = $file_path;
                $item_picture->code = $code;
                $item_picture->save();
                 DB::commit();
                return response()->json(['status' => 'success' , 'msg' => 'Your changes have been successfully saved!','path' => $file_path]);
             }
             return response()->json(['status' => 'warning' , 'msg' => 'Something went wrong !']);   

             
        } catch (\Exception $ex) {
            DB::rollBack();
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }
    }
    public function DeleteImage(Request $request){
        DB::beginTransaction();
        try{
            $data = $request->all();
            $record = ItemPicturesModal::where('id',$data['id'])->first();
            $http = $request->getSchemeAndHttpHost();
            $path_folder = str_replace($http,'',$record->picture_ori);
            $sd = public_path($path_folder);
            if (file_exists($sd)) {
                unlink($sd);
            }
            DB::commit();
            $record->delete();
            return response()->json(['status' => 'success' , 'msg' => 'File has been delete']);
            
        }
        catch (\Exception $ex) {
            DB::rollBack();
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        } 
    }

}
