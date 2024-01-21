<?php

namespace App\Http\Controllers;

use App\Exports\UserExport;
use Exception;
use App\Models\MenuModel;
use App\MainSystem\system;
use Illuminate\Http\Request;
use App\Models\MenuGroupModel;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class MenuController extends Controller
{
    public $page_id ;
    public $page;
    public $system ;
    public $prefix;
    function __construct(){
        $this->page_id = "1006";
        $this->page = "Menu";
        $this->system = new system();
        $this->prefix = "menu";
    }
    public function index(){
        try{
            $col_record = $this->system->getField($this->page_id);
            $record = MenuModel::paginate(10);
            $page = $this->page;
            $page_id = $this->page_id;
            $prefix = $this->prefix;
            return view('admin.menu.menu_list',compact('col_record','record','page','page_id','prefix'));
        }catch (Exception $ex){
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }
        
    }
    public function modal(Request $request){
        $col_record = $this->system->getField($this->page_id);
        $record = null;
        if(isset($data['code'])){
            $record = MenuModel::where('id',$data['code'])->first();
        }
        $code = $data['code'] ?? '';
        $view = view('admin.menu_group.menu_group_card',compact('col_record','record','code'))->render();
        return response()->json(['status' => 'success' , 'view' => $view]);
    }
    public function submit(Request $request){
        DB::beginTransaction();
        try{
            $data = $request->all();
            $col_record = $this->system->getField($this->page_id);
            $new = new MenuModel();
            if(isset($data['is_code']) &&  $data['is_code'] !=''){
                $new = MenuModel::where('id',$data['is_code'])->first();
            }
            foreach($col_record as $col){
                if(isset($data[$col->filed_name])){
                    $new[$col->filed_name] = trim($data[$col->filed_name]);
                }
            }
            $new->save();
            DB::commit();
            $record = MenuModel::paginate(10);
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
            $record = MenuModel::where('id',$data['code'])->first();
            $record->delete();
            DB::commit();
            return response()->json(['status' => 'success']);
        }catch (Exception $ex){
            DB::rollBack();
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }
    }
    public function exportExcell(Request $request){
        $page = $this->page;
        return Excel::download(new UserExport($page),'item.xlsx');
    }
}
