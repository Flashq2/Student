<?php

namespace App\Http\Controllers;

use App\MainSystem\system;
use Exception;
use Illuminate\Http\Request;

abstract class MyRootController extends Controller // 
{
    protected $page_id ;
    protected $page;
    protected $system ;
    protected $prefix;
    protected $table;
    protected $type ;
    protected $blade_path ;
    protected $blade_card_path ;
    protected $modal ;
    function __construct(){
        $this->page_id = "";
        $this->page = "";
        $this->system = new system();
        $this->prefix = "";
        $this->table = '';
        $this->blade_card_path = '';
        $this->blade_path = '' ;
        $this->modal = '' ;
        $this->middleware('auth')->except('index');
    }
    public function index(){
        try{
            // $record = SlideShowModel::paginate(10);
            $list_field = $this->system->getField($this->page_id) ;
            $global_param = $GLOBALS ;
            $param = '1=1' ;
            if($global_param){
                $param = $this->system->extractQuery($global_param);
            }
            $records = $this->modal::whereRaw($param)->paginate(env('CUSTOME_PAGINATE'));
            $params = [
                'records' => $records,
                'list_field' => $list_field ,
                'page_id' => $this->system->Encr_string($this->page_id),
                'page_title' => $this->system->Encr_string($this->page),
                'prefix' => $this->system->Encr_string($this->prefix),
            ];

            return view($this->blade_path,$params);
        }catch(Exception $ex){

        }
    }
}
