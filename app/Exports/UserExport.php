<?php

namespace App\Exports;

use App\Models\MenuModel;
use App\Models\User;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromView;
use Symfony\Component\CssSelector\Node\FunctionNode;

class UserExport implements FromView
{
    protected $page;
    protected $col_record;
    protected $modal_path;
    protected $request_query;
    public function __construct($col_record,$modal_path,$request_query){
        $this->col_record = $col_record;
        $this->modal_path = $modal_path;
        $this->request_query = $request_query;
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return User::all();
    }
    public function view(): View{
        $col_record = $this->col_record;
        $modal_path = $this->modal_path;
        $excell = true;
        $request_query = $this->request_query;
        $record = \DB::table($modal_path)->whereRaw($request_query)->paginate(1000);
        return view('admin.menu_group.table_record',compact('record','col_record','excell'));
    }
}
