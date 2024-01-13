<?php

namespace App\Http\Controllers;

use Exception;
use App\MainSystem\system;
use App\Models\TableFieldModel;
use App\Models\TableModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TableController extends Controller
{
    public $system;
    public $page;

    function __construct() {
        $this->system = new system();
        $this->page = "Table";
    }
    public function index(){
        $tables = DB::select('SHOW TABLES');
        $record = TableModel::all();
        return view('admin.tables.table_list',compact('tables','record'));
    }
    public function create(Request $request){
        DB::beginTransaction();
        try{
            $data = $request->all();
            $record = new TableModel();
            $record->table_id = $data['table_id'];
            $record->table_name = $data['table_name'];
            $record->save();
            DB::commit();
            $record = TableModel::all();
            $view = view('admin.tables.table_row',compact('record'))->render();
            return response()->json(['status'=>'success','view' =>$view]);
        }catch(Exception $ex){
            DB::rollBack();
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }
    }
    public  function table_filed(Request $request){
        $data = $request->all();
        $decode = $this->system->Decr_string($data['code'],null,null) ;
        // $s =preg_match("/^[\pZ\pC]+$/u", $data['code']);
        // dd($s);
        $record = TableModel::where('id',$decode)->first();
        $records = TableFieldModel::where('table_name',$record->table_name)->paginate(10);
        $column = DB::getSchemaBuilder()->getColumnListing('table_field');
        return view('admin.table_filed.table_filed_list',compact('records','column'));
    }
    public function build(Request $request){
        DB::beginTransaction();
        try{
            $data = $request->all();
            $decode = $this->system->Decr_string($data['code'],null,null) ;
            $record = TableModel::where('id',$decode)->first();
            $exist = TableFieldModel::where('table_name',$record->table_name)->first();
            $column = DB::getSchemaBuilder()->getColumnListing($record->table_name);
            $i = 1;
            if($exist){
                TableFieldModel::where('table_name',$record->table_name)->delete();
                foreach($column as $col){
                    $new = new TableFieldModel();
                    $new->table_id = $record->table_id;
                    $new->table_name = $record->table_name;
                    
                    $new->filed_name = $col;
                    $new->field_id = $record->table_id + $i;
                    $new->on_validate = 'no';
                    $new->max_lenght = 255;
                    $new->hide = 'no';
                    if($col == 'code')   $new->on_validate  = 'yes';
                    if(in_array($col,['created_at','updated_at','deleted_at','id'])) $new->hide = 'yes';
                    $new->email = Auth::user()->email;
                    $new->list_order = $i;
                    $i +=1;
                    $new->field_type = 'text';
                    $new->save();
                    DB::commit();
                }

            }else{
                foreach($column as $col){
                    $new = new TableFieldModel();
                    $new->table_id = $record->table_id;
                    $new->table_name = $record->table_name;
                    $new->filed_name = $col;
                    $new->field_id = $record->table_id + $i;
                    $new->on_validate = 'no';
                    $new->max_lenght = 255;
                    $new->hide = 'no';
                    if($col == 'code')   $new->on_validate  = 'yes';
                    if(in_array($col,['created_at','updated_at','deleted_at','id'])) $new->hide = 'yes';
                    $new->email = Auth::user()->email;
                    $new->list_order = $i;
                    $new->field_type = 'text';
                    $i +=1;
                    $new->save();
                    DB::commit();
                }
            }
            $records = TableFieldModel::where('table_name',$record->table_name)->paginate(10);
            $view = view('admin.table_filed.table_record',compact('records','column'))->render();
            return response()->json(['status'=>'success','msg' =>'Table Build Successfuly','view'=>$view]);
        }catch(Exception $ex){
            DB::rollBack();
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }


        // $table_record =
    }
    public function Ajaxpaginat(Request $request){
        try{
            $data = $request->all();
            $decode = $this->system->Decr_string($data['code'],null,null) ;
            $record = TableModel::where('id',$decode)->first();
            $records = TableFieldModel::where('table_name',$record->table_name)->paginate(10);
            $column = DB::getSchemaBuilder()->getColumnListing('table_field');
            $view = view('admin.table_filed.table_record',compact('records','column'))->render();
            return response()->json(['status'=>'success','msg' =>'','view'=>$view]);
        }
        catch(Exception $ex){
            $this->system->telegram($ex->getMessage(),$this->page,$ex->getLine());
            return response()->json(['status' => 'warning' , 'msg' => $ex->getMessage()]);
        }

    }
}
