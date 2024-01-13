<?php

namespace App\Http\Controllers;

use App\Exports\UserExport;
use Exception;
use App\Models\MenuModel;
use App\MainSystem\system;
use Illuminate\Http\Request;
use App\Models\SlideShowModel;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class SlideShowController extends Controller
{
    public $page_id ;
    public $page;
    public $system ;
    public $prefix;
    function __construct(){
        $this->page_id = "10011";
        $this->page = "Slide Show";
        $this->system = new system();
        $this->prefix = "slide_show";
    }
    public function index(){
        try{
            $col_record = $this->system->getField($this->page_id);
            $record = SlideShowModel::paginate(10);
            $page = $this->page;
            $page_id = $this->page_id;
            $prefix = $this->prefix;
            return view('admin.slide_show.slide_show',compact('col_record','record','page','page_id','prefix'));
        }catch (Exception $ex){
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }
        
    }
    public function modal(Request $request){
        $data = $request->all();
        $record = [];
        if(isset($data['code'])){
            $record = SlideShowModel::where('id',$data['code'])->first();
        }
        $code = $data['code'] ?? '';
        $col_record = $this->system->getField($this->page_id);
        $view = view('admin.slide_show.upload_image',compact('col_record','record','code'))->render();
        return response()->json(['status' => 'warning' , 'view' => $view]);
    }
    public function submit(Request $request){
        DB::beginTransaction();
        try{
            $data = $request->all();
            $col_record = $this->system->getField($this->page_id);
            $new = new SlideShowModel();
            if(isset($data['is_code']) &&  $data['is_code'] !=''){
                $new = SlideShowModel::where('id',$data['is_code'])->first();
            }
            foreach($col_record as $col){
                if(isset($data[$col->filed_name])){
                    $new[$col->filed_name] = trim($data[$col->filed_name]);
                }
            }
            $new->save();
            DB::commit();
            $record = SlideShowModel::paginate(10);
            $view = view('admin.menu_group.table_record',compact('col_record','record',))->render();
            return response()->json(['status' => 'success','view' => $view]);
        }catch (Exception $ex){
            DB::rollBack();
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }
    }
    public function delete(Request $request){
        DB::beginTransaction();
        try{
            $data = $request->all();
            $record = SlideShowModel::where('id',$data['code'])->first();
            // Unlink slide from folder 
            $http = $request->getSchemeAndHttpHost();
            $path_folder = str_replace($http,'',$record->picture_ori);
            $sd = public_path($path_folder);
            if (file_exists($sd)) {
                unlink($sd);
            }
            $record->delete();
            DB::commit();
            return response()->json(['status' => 'success']);
        }catch (Exception $ex){
            DB::rollBack();
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }
    }
    public function UploadImage(Request $request){
        DB::beginTransaction();
        try {
            $data = $request->all();
            $code = $data['code'];
            $upload_path = 'upload/slide_show/'.$code;
            $item_picture = new SlideShowModel();
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
                $item_picture->type = $code;
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
}
