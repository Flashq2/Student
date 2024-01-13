<?php

namespace App\Http\Controllers;

use App\Models\ItemGroupModel;
use Exception;
use App\Models\MenuModel;
use App\MainSystem\system;
use Illuminate\Http\Request;
use App\Models\MenuGroupModel;
use Illuminate\Support\Facades\DB;

class ItemGroupController extends Controller
{
    public $page_id ;
    public $page;
    public $system ;
    public $prefix;
    function __construct(){
        $this->page_id = "10004";
        $this->page = "Item Group";
        $this->system = new system();
        $this->prefix = "item_group";
    }
    public function index(){
        try{
            $col_record = $this->system->getField($this->page_id);
            $record = ItemGroupModel::paginate(10);
            $page = $this->page;
            $page_id = $this->page_id;
            $prefix = $this->prefix;
            return view('admin.item_group.item_group_list',compact('col_record','record','page','page_id','prefix'));
        }catch (Exception $ex){
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }

    }
    public function modal(Request $request){
        $col_record = $this->system->getField($this->page_id);
        $record = null;
        if(isset($data['code'])){
            $record = ItemGroupModel::where('id',$data['code'])->first();
        }
        $code = $data['code'] ?? '';
        $view = view('admin.menu_group.menu_group_card',compact('col_record'))->render();
        return response()->json(['status' => 'warning' , 'view' => $view]);
    }
    public function submit(Request $request){
        DB::beginTransaction();
        try{
            $data = $request->all();
            $col_record = $this->system->getField($this->page_id);
            $new = new ItemGroupModel();
            if(isset($data['is_code']) &&  $data['is_code'] !=''){
                $new = ItemGroupModel::where('id',$data['is_code'])->first();
            }
            foreach($col_record as $col){
                if(isset($data[$col->filed_name])){
                    $new[$col->filed_name] = trim($data[$col->filed_name]);
                }
            }
            $new->save();
            DB::commit();
            $record = ItemGroupModel::paginate(10);
            $view = view('admin.menu_group.table_record',compact('col_record','record'))->render();
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
            $record = ItemGroupModel::where('id',$data['code'])->first();
            $record->delete();
            DB::commit();
            return response()->json(['status' => 'success']);
        }catch (Exception $ex){
            DB::rollBack();
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }
    }
}
