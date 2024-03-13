<?php

namespace App\Http\Controllers\Administration\SystemSetup;

use Carbon\Carbon;
use Pusher\Pusher;
use App\Services\service;
use App\MainSystem\system;
use App\Models\System\Page;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\System\MenuUrl;
use App\Models\System\PageGroup;
use App\Models\Web\LicensePages;
use Illuminate\Support\Facades\DB;
use App\Models\System\PageArchived;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\System\PageGroupField;
use Illuminate\Support\Facades\Input;
use App\Models\System\PageGroupArchived;
use App\Models\System\PageGroupFieldTemplate;
use App\Models\Administration\Database\Setup\Tables;
use App\Models\Administration\SystemSetup\UserSetup;
use App\Models\System\PageGroupFieldTemplateArchived;
use App\Models\Administration\SystemSetup\PermissionObjects;

class PagesController extends Controller
{
    protected $service;
    protected $page_id;
    protected $page_card_id;
    protected $view;
    protected $options;
    protected $pusher;
    protected $route = '';
    protected $model_path = '';
    protected $blade_path = '';
    protected $option_template = '';
    
    protected $page_type = '';
    
    protected $list_option_type = '';
    protected $is_create_card = 'No';
    protected $card_page_id = '';
    protected $reference_serail = '';
    protected $table_primary_key = '';
    private $auto_incressment = 'No';

    public function __construct()
    {
        $this->middleware('auth');
        $this->service = new system();
        $this->page_id = '1347000';
        $this->page_card_id = '';
        $this->view = 'v_page';
        $this->options = array('cluster' => 'ap1','encrypted' => true);
        $this->pusher = new Pusher(
            config('app.pusher_key'),
            config('app.pusher_secret'),
            config('app.pusher_id'),
            $this->options
        );
    }
    public function index(Request $request)
    {
        $current_user = Auth::user();
        $user = UserSetup::select('permission_code')->where('email', $current_user->email)->first();
        $permissionList = PermissionObjects::where('object_id', $this->page_id)->where('permission_code', $user->permission_code)->first();
        if ($permissionList) {
            if ($permissionList->execute == 'No') {
                return redirect()->route('accessdenied.index', ['name' => trans('greetings.Item Journal')]);
            }
        } else {
            return redirect()->route('accessdenied.index', ['name' => trans('greetings.Item Journal')]);
        }
        $permissionCard = PermissionObjects::where('object_id', $this->page_card_id)->where('permission_code', $user->permission_code)->first();
        //      Being List Field
        if ($this->service->isExistPageGroupFieldByUser($this->page_id, $current_user->email) == false) {
            if ($this->service->insertPageGroupField($this->page_id, $current_user->email)) {
                $lstFields = $this->service->getPageGroupFieldByUser($this->page_id);
            }
        } else {
            $lstFields = $this->service->getPageGroupFieldByUser($this->page_id);
        }
        //      End List Field
        //      Being Card Field
        if ($this->service->isExistPageGroupFieldByUser($this->page_card_id, $current_user->email) == false) {
            if ($this->service->insertPageGroupField($this->page_card_id, $current_user->email)) {
                $cardFields = $this->service->getPageGroupFieldByUser($this->page_card_id);
            }
        } else {
            $cardFields = $this->service->getPageGroupFieldByUser($this->page_card_id);
        }

        $criterias = $this->service->GetCheckFilterAndMenu($lstFields);
        $filters = $criterias[0];
        $sublistfields = PageGroupField::where('object_id', $this->page_id)->where('user_name', $current_user->email)
            ->where('object_type', 'page')
            ->where('hide', 0)
            ->orderBy('index', 'asc')->get();

        $pid = base64_encode($this->page_id);
        $pcid = base64_encode($this->page_card_id);
        $records = DB::connection('company')->table('page')->whereRaw($criterias[1])->paginate(($current_user->table_pagination) ? $current_user->table_pagination : Config::get('app.table_pagination'));
        $last_paginat = $records->lastPage();
        $page_show_record = $current_user->table_pagination;
        $data_last_page_id = DB::connection('company')->table('page')->selectRaw(" SUBSTRING(id, 1, 1) prefix ,  max(id) + 1000 as new_id ")->groupBy(\DB::raw('SUBSTRING(id, 1, 1)'))->get(); 
        
        $dir_view = resource_path('views/*');
        $viewrPaths = $this->getSubDirectories($dir_view);

        // $dir_model = app_path('Models/*');
        // $modelPaths = $this->getSubDirectories($dir_model);

        $dir_controllers = app_path('Http/Controllers/*');
        $controllerPaths = $this->getSubDirectories($dir_controllers);

        $dir_routes = base_path('routes/*');
        $routePaths = $this->getFileInFolder($dir_routes);
      
        return view('administration.system_setup.pages', compact('lstFields', 'cardFields', 'records', 'permissionList','controllerPaths','viewrPaths',
            'permissionCard','routePaths', 'filters', 'pid', 'pcid', 'sublistfields', 'sublist_data', 'last_paginat', 'page_show_record','data_last_page_id'));
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $name = $data['name'];
        \DB::connection('company')->beginTransaction();
        try {
            $no = service::decrypt($data['no']);
            $user = UserSetup::select('permission_code')->where('email', Auth::user()->email)->first();
            $permissionList = PermissionObjects::where('object_id', $this->page_id)->where('permission_code', $user->permission_code)->first();
            if ($permissionList->execute == 'No') {
                return redirect()->route('accessdenied.index', ['name' => 'Permission']);
            }
            $lstFields = $this->service->getPageGroupFieldByUser($this->page_id);

            $record = Page::where('id', $no)->first();
            if ($record) {
                if ($data['name'] == 'custom_template') {
                    $record->$name = trim($data['value'], ' ');
                } else {
                    return response()->json(['status' => 'warning', 'msg' => trans('greetings.Something when warng!')]);
                }
            }
            $record->save();
            \DB::connection('company')->commit();

            return response()->json(['status' => 'success', 'value' => $record->$name]);

        } catch (Exception $ex) {
            \DB::connection('company')->rollback();
        }
    }
    public function ajaxPagination(Request $request)
    {
        $user = UserSetup::select('permission_code')->where('email', Auth::user()->email)->first();
        $permissionList = PermissionObjects::where('object_id', $this->page_id)->where('permission_code', $user->permission_code)->first();
        if ($permissionList->execute == 'No') {
            return redirect()->route('accessdenied.index', ['name' => 'Permission']);
        }
        $lstFields = $this->service->getPageGroupFieldByUser($this->page_id);

        $criterias = $this->service->getSearchajaxPagination($lstFields, $this->page_id);
        $records = DB::connection('company')->table($this->view)->whereraw($criterias)->paginate((Auth::user()->table_pagination) ? Auth::user()->table_pagination : Config::get('app.table_pagination'));

        if (Auth::user()->app_setup->scroll_pagination == 'No') {
            return view('administration.system_setup.pages_list', compact('lstFields', 'records', 'permissionList'));
        } else {
            $record_only = 1;
            $view = view('administration.system_setup.pages_list', compact('lstFields', 'records', 'permissionList', 'record_only'))->render();
            return response()->json(['html' => $view]);
        }

    }
    public function search(Request $request)
    {
        $user = UserSetup::select('permission_code')->where('email', Auth::user()->email)->first();
        $permissionList = PermissionObjects::where('object_id', $this->page_id)->where('permission_code', $user->permission_code)->first();
        if ($permissionList->execute == 'No') {
            return redirect()->route('accessdenied.index', ['name' => 'Permission']);
        }
        $lstFields = $this->service->getPageGroupFieldByUser($this->page_id);

        $filters = $request->all();
        $criterias = $this->service->getSearchCriterias($lstFields, $filters);

        $records = DB::connection('company')->table($this->view)->whereraw($criterias)->where('id', '<>', 'null')->paginate((Auth::user()->table_pagination) ? Auth::user()->table_pagination : Config::get('app.table_pagination'));

        if (Auth::user()->app_setup->scroll_pagination == 'No') {
            return view('administration.system_setup.pages_list', compact('lstFields', 'records', 'permissionList'));
        } else {
            $record_only = 1;
            return view('administration.system_setup.pages_list', compact('lstFields', 'records', 'permissionList', 'record_only'))->render();
        }

    }
    public function advanceSearch(Request $request)
    {
        $user = UserSetup::select('permission_code')->where('email', Auth::user()->email)->first();
        $permissionList = PermissionObjects::where('object_id', $this->page_id)->where('permission_code', $user->permission_code)->first();
        if ($permissionList->execute == 'No') {
            return redirect()->route('accessdenied.index', ['name' => 'Permission']);
        }
        $permissionCard = PermissionObjects::where('object_id', $this->page_card_id)->where('permission_code', $user->permission_code)->first();
        $lstFields = $this->service->getPageGroupFieldByUser($this->page_id);
        $filters = $request->all();
        $criterias = $this->service->getAdvanceSearchCriterias($lstFields, $filters);
        $records = DB::connection('company')->table($this->view)->whereRaw($criterias)->orderBy('id', 'asc')->paginate((Auth::user()->table_pagination) ? Auth::user()->table_pagination : Config::get('app.table_pagination'));

        if (Auth::user()->app_setup->scroll_pagination == 'No') {
            return view('administration.system_setup.pages_list', compact('lstFields', 'records', 'permissionList'));
        } else {
            $record_only = 1;
            return view('administration.system_setup.pages_list', compact('lstFields', 'records', 'permissionList', 'permissionCard', 'record_only'))->render();
        }
    }
    public function Achive(Request $request)
    {
        \DB::connection('company')->beginTransaction();
        try {
            //purshser init.
            $options = array(
                'cluster' => 'ap1',
                'encrypted' => true,
            );
            $pusher = new Pusher(
                config('app.pusher_key'),
                config('app.pusher_secret'),
                config('app.pusher_id'),
                $options
            );

            $pages = Page::get();
            $page_groups = PageGroup::get();
            $page_group_field_templates = PageGroupFieldTemplate::get();
            // ================== Delete ===================
            \DB::connection('company')->table('page_archieved')->delete();
            \DB::connection('company')->table('page_group_archieved')->delete();
            \DB::connection('company')->table('page_group_field_template_archieved')->delete();
            //  ============ Create Copies ==============
            $no_of_succeed_row = 0;
            $no_of_push = 0;
            foreach ($pages as $page) {
                //============================ Processing '.......'
                $no_of_succeed_row++;
                $no_of_succeed_row_percentage = ' ' . number_format($no_of_succeed_row / count($pages) * 100, 0);
                if ($no_of_push != $no_of_succeed_row_percentage) {
                    $data['message'] = trans('greetings.Processing Archive') . ' -> Pages : ' . $no_of_succeed_row_percentage . ' %';
                    $pusher->trigger('Archive.' . Auth::user()->id, 'Archived', $data['message']);
                }
                $no_of_push = $no_of_succeed_row_percentage;
                $page_archived = new PageArchived();
                $columns = $page_archived->getTableColumns();
                $exclude = ['created_at', 'updated_at', 'deleted_at', 'status'];
                $decimalColumns = [];
                $dateColumns = [];
                foreach ($columns as $column) {
                    if (in_array($column, $exclude)) {
                        continue;
                    }
                    if (!isset($page[$column])) {
                        continue;
                    }
                    if (in_array($column, $decimalColumns)) {
                        if ($page[$column] !== '' && $page[$column] !== null) {
                            $page_archived[$column] = $this->service->toDouble($page[$column]);
                        }
                    } elseif (in_array($column, $dateColumns)) {
                        if ($page[$column] !== '' && $page[$column] !== null) {
                            $page_archived[$column] = Carbon::parse($page[$column])->toDateString();
                        }
                    } else {
                        $page_archived[$column] = $page[$column];
                    }
                }
                $page_archived->save();
            }
            $no_of_succeed_row = 0;
            $no_of_push = 0;
            foreach ($page_groups as $page_group) {
                //============================ Processing '.......'
                $no_of_succeed_row++;
                $no_of_succeed_row_percentage = ' ' . number_format($no_of_succeed_row / count($page_groups) * 100, 0);
                if ($no_of_push != $no_of_succeed_row_percentage) {
                    $data['message'] = trans('greetings.Processing Archive') . ' -> Pages Group : ' . $no_of_succeed_row_percentage . ' %';
                    $pusher->trigger('Archive.' . Auth::user()->id, 'Archived', $data['message']);
                }
                $no_of_push = $no_of_succeed_row_percentage;

                $page_group_archived = new PageGroupArchived();
                $columns = $page_group_archived->getTableColumns();
                $exclude = ['created_at', 'updated_at', 'deleted_at'];
                $decimalColumns = [];
                $dateColumns = ['created_at', 'updated_at'];
                foreach ($columns as $column) {
                    if (in_array($column, $exclude)) {
                        continue;
                    }
                    if (!isset($page_group[$column])) {
                        continue;
                    }
                    if (in_array($column, $decimalColumns)) {
                        if ($page_group[$column] !== '' && $page_group[$column] !== null) {
                            $page_group_archived[$column] = $this->service->toDouble($page_group[$column]);
                        }
                    } elseif (in_array($column, $dateColumns)) {
                        $page_group_archived[$column] = Carbon::now()->toDateString();
                    } else {
                        $page_group_archived[$column] = $page_group[$column];
                    }
                }
                $page_group_archived->save();
            }
            $no_of_succeed_row = 0;
            $no_of_push = 0;
            foreach ($page_group_field_templates as $page_group_field_template) {
                //============================ Processing '.......'
                $no_of_succeed_row++;
                $no_of_succeed_row_percentage = ' ' . number_format($no_of_succeed_row / count($page_group_field_templates) * 100, 0);
                if ($no_of_push != $no_of_succeed_row_percentage) {
                    $data['message'] = trans('greetings.Processing Archive') . ' -> Pages Group Field Template : ' . $no_of_succeed_row_percentage . ' %';
                    $pusher->trigger('Archive.' . Auth::user()->id, 'Archived', $data['message']);
                }
                $no_of_push = $no_of_succeed_row_percentage;
                $page_group_field_template_archived = new PageGroupFieldTemplateArchived();
                $columns = $page_group_field_template_archived->getTableColumns();
                $exclude = ['created_at', 'updated_at', 'deleted_at', 'url_para_1', 'url_para_1_value', 'url_para_2', 'url_para_2_value', 'url_para_3', 'url_para_3_value', 'url_para_4', 'url_para_4_value', 'url_para_5', 'url_para_5_value', 'url_para_6', 'url_para_6_value', 'url_para_7', 'url_para_7_value', 'url_para_8', 'url_para_8_value', 'url_para_9', 'url_para_9_value'];
                $decimalColumns = [];
                $dateColumns = ['created_at', 'updated_at'];
                foreach ($columns as $column) {
                    if (in_array($column, $exclude)) {
                        continue;
                    }
                    if (!isset($page_group_field_template[$column])) {
                        continue;
                    }
                    if (in_array($column, $decimalColumns)) {
                        if ($page_group_field_template[$column] !== '' && $page_group_field_template[$column] !== null) {
                            $page_group_field_template_archived[$column] = $this->service->toDouble($page_group_field_template[$column]);
                        }
                    } elseif (in_array($column, $dateColumns)) {
                        $page_group_page_group_field_template_archivedarchived[$column] = Carbon::now()->toDateString();
                    } else {
                        $page_group_field_template_archived[$column] = $page_group_field_template[$column];
                    }
                }
                $page_group_field_template_archived->save();
            }
            \DB::connection('company')->commit();
            return response()->json(['status' => 'success', 'msg' => trans('greetings.Archived successfull')]);
        } catch (\Exception $ex) {
            \DB::connection('company')->rollback();
        }
    }
    public function RestoreSystemDefault(Request $request)
    {
        $app_env = config('app.env');
        if(strtolower($app_env) != 'production') {
            return response()->json(['status' => 'warning', 'msg' => 'You cannot restore system default setting in development environment!']);
        };
        $user = Auth::user()->user_setup;
        if (Input::get('secure')) {
            $credential = array(
                'email' => Auth::user()->email,
                'password' => Input::get('secure'),
            );
            if (!Auth::attempt($credential)) {
                return response()->json([
                    'status' => 'failed',
                    'message' => trans('greetings.IncorrectPassword'),
                    'path' => '',
                ]);
            }
        }

        $default_pages = \DB::connection('mysql')->table('page')->get();
        $default_page_groups = \DB::connection('mysql')->table('page_group')->get();
        $default_page_group_field_templates = \DB::connection('mysql')->table('page_group_field_template')->get();
        \DB::connection('company')->beginTransaction();
        try {
            //purshser init.
            $options = array(
                'cluster' => 'ap1',
                'encrypted' => true,
            );
            $pusher = new Pusher(
                config('app.pusher_key'),
                config('app.pusher_secret'),
                config('app.pusher_id'),
                $options
            );
            //==============================================
            // ================== Archived =================
            //==============================================
            if ($request->archived == 'on') {
                $pages = Page::get();
                $page_groups = PageGroup::get();
                $page_group_field_templates = PageGroupFieldTemplate::get();
                // ================== Delete ===================
                \DB::connection('company')->table('page_archieved')->delete();
                \DB::connection('company')->table('page_group_archieved')->delete();
                \DB::connection('company')->table('page_group_field_template_archieved')->delete();
                //  ============ Create Copies ==============
                $no_of_succeed_row = 0;
                $no_of_push = 0;
                foreach ($pages as $page) {
                    //============================ Processing '.......'
                    $no_of_succeed_row++;
                    $no_of_succeed_row_percentage = ' ' . number_format($no_of_succeed_row / count($pages) * 100, 0);
                    if ($no_of_push != $no_of_succeed_row_percentage) {
                        $data['message'] = trans('greetings.Processing Archive') . ' -> Pages : ' . $no_of_succeed_row_percentage . ' %';
                        $pusher->trigger('ResetSystemDefault.' . Auth::user()->id, 'ResetSystemDefault', $data['message']);
                    }
                    $no_of_push = $no_of_succeed_row_percentage;
                    $page_archived = new PageArchived();
                    $columns = $page_archived->getTableColumns();
                    $exclude = ['created_at', 'updated_at', 'deleted_at', 'status'];
                    $decimalColumns = [];
                    $dateColumns = [];
                    foreach ($columns as $column) {
                        if ($column == 'max_length') {
                            if ($page[$column] == '') {
                                $page_archived[$column] = 50;
                                continue;
                            }
                        }
                        if (in_array($column, $exclude)) {
                            continue;
                        }
                        if (!isset($page[$column])) {
                            continue;
                        }
                        if (in_array($column, $decimalColumns)) {
                            if ($page[$column] !== '' && $page[$column] !== null) {
                                $page_archived[$column] = $this->service->toDouble($page[$column]);
                            }
                        } elseif (in_array($column, $dateColumns)) {
                            if ($page[$column] !== '' && $page[$column] !== null) {
                                $page_archived[$column] = Carbon::parse($page[$column])->toDateString();
                            }
                        } else {
                            $page_archived[$column] = $page[$column];
                        }
                    }
                    $page_archived->save();
                }
                $no_of_succeed_row = 0;
                $no_of_push = 0;
                foreach ($page_groups as $page_group) {
                    //============================ Processing '.......'
                    $no_of_succeed_row++;
                    $no_of_succeed_row_percentage = ' ' . number_format($no_of_succeed_row / count($page_groups) * 100, 0);
                    if ($no_of_push != $no_of_succeed_row_percentage) {
                        $data['message'] = trans('greetings.Processing Archive') . ' -> Pages Group : ' . $no_of_succeed_row_percentage . ' %';
                        $pusher->trigger('ResetSystemDefault.' . Auth::user()->id, 'ResetSystemDefault', $data['message']);
                    }
                    $no_of_push = $no_of_succeed_row_percentage;

                    $page_group_archived = new PageGroupArchived();
                    $columns = $page_group_archived->getTableColumns();
                    $exclude = ['created_at', 'updated_at', 'deleted_at'];
                    $decimalColumns = [];
                    $dateColumns = ['created_at', 'updated_at'];
                    foreach ($columns as $column) {
                        if ($column == 'max_length') {
                            if ($page_group[$column] == '') {
                                $page_group_archived[$column] = 50;
                                continue;
                            }
                        }
                        if (in_array($column, $exclude)) {
                            continue;
                        }
                        if (!isset($page_group[$column])) {
                            continue;
                        }
                        if (in_array($column, $decimalColumns)) {
                            if ($page_group[$column] !== '' && $page_group[$column] !== null) {
                                $page_group_archived[$column] = $this->service->toDouble($page_group[$column]);
                            }
                        } elseif (in_array($column, $dateColumns)) {
                            $page_group_archived[$column] = Carbon::now()->toDateString();
                        } else {
                            $page_group_archived[$column] = $page_group[$column];
                        }
                    }
                    $page_group_archived->save();
                }
                $no_of_succeed_row = 0;
                $no_of_push = 0;
                foreach ($page_group_field_templates as $page_group_field_template) {
                    //============================ Processing '.......'
                    $no_of_succeed_row++;
                    $no_of_succeed_row_percentage = ' ' . number_format($no_of_succeed_row / count($page_group_field_templates) * 100, 0);
                    if ($no_of_push != $no_of_succeed_row_percentage) {
                        $data['message'] = trans('greetings.Processing Archive') . ' -> Pages Group Field Template : ' . $no_of_succeed_row_percentage . ' %';
                        $pusher->trigger('ResetSystemDefault.' . Auth::user()->id, 'ResetSystemDefault', $data['message']);
                    }
                    $no_of_push = $no_of_succeed_row_percentage;
                    $page_group_field_template_archived = new PageGroupFieldTemplateArchived();
                    $columns = $page_group_field_template_archived->getTableColumns();
                    $exclude = ['created_at', 'updated_at', 'deleted_at', 'url_para_1', 'url_para_1_value', 'url_para_2', 'url_para_2_value', 'url_para_3', 'url_para_3_value', 'url_para_4', 'url_para_4_value', 'url_para_5', 'url_para_5_value', 'url_para_6', 'url_para_6_value', 'url_para_7', 'url_para_7_value', 'url_para_8', 'url_para_8_value', 'url_para_9', 'url_para_9_value'];
                    $decimalColumns = [];
                    $dateColumns = ['created_at', 'updated_at'];
                    foreach ($columns as $column) {
                        if ($column == 'max_length') {
                            if ($page_group_field_template[$column] == '') {
                                $page_group_field_template_archived[$column] = 50;
                                continue;
                            }
                        }
                        if (in_array($column, $exclude)) {
                            continue;
                        }
                        if (!isset($page_group_field_template[$column])) {
                            continue;
                        }
                        if (in_array($column, $decimalColumns)) {
                            if ($page_group_field_template[$column] !== '' && $page_group_field_template[$column] !== null) {
                                $page_group_field_template_archived[$column] = $this->service->toDouble($page_group_field_template[$column]);
                            }
                        } elseif (in_array($column, $dateColumns)) {
                            $page_group_page_group_field_template_archivedarchived[$column] = Carbon::now()->toDateString();
                        } else {
                            $page_group_field_template_archived[$column] = $page_group_field_template[$column];
                        }
                    }
                    $page_group_field_template_archived->save();
                }
            }
            //==============================================
            // =========== Reset System Default ============
            //==============================================
            // ================== Delete ===================
            \DB::connection('company')->table('page')->delete();
            \DB::connection('company')->table('page_group')->delete();
            \DB::connection('company')->table('page_group_field_template')->delete();

            //  ============ Create Copies ================
            $no_of_succeed_row = 0;
            $no_of_push = 0;
            foreach ($default_pages as $default_page) {
                //============================ Processing '.......'
                $no_of_succeed_row++;
                $no_of_succeed_row_percentage = ' ' . number_format($no_of_succeed_row / count($default_pages) * 100, 0);
                if ($no_of_push != $no_of_succeed_row_percentage) {
                    $data['message'] = trans('greetings.Processing Reset System Default') . ' -> Pages : ' . $no_of_succeed_row_percentage . ' %';
                    $pusher->trigger('ResetSystemDefault.' . Auth::user()->id, 'ResetSystemDefault', $data['message']);
                }
                $no_of_push = $no_of_succeed_row_percentage;

                $page = new Page();
                $columns = $page->getTableColumns();
                $exclude = ['created_at', 'updated_at', 'deleted_at', 'status'];
                $decimalColumns = [];
                $dateColumns = [];
                foreach ($columns as $column) {
                    if ($column == 'max_length') {
                        if ($default_page->$column == '') {
                            $page->$column = 50;
                            continue;
                        }
                    }
                    if (in_array($column, $exclude)) {
                        continue;
                    }
                    if (!isset($default_page->$column)) {
                        continue;
                    }
                    if (in_array($column, $decimalColumns)) {
                        if ($default_page->$column !== '' && $default_page->$column !== null) {
                            $page->$column = $this->service->toDouble($default_page->$column);
                        }
                    } elseif (in_array($column, $dateColumns)) {
                        if ($default_page->$column !== '' && $default_page->$column !== null) {
                            $page->$column = Carbon::parse($default_page->$column)->toDateString();
                        }
                    } else {
                        $page->$column = $default_page->$column;
                    }

                }
                $page->save();
            }

            $no_of_succeed_row = 0;
            $no_of_push = 0;
            foreach ($default_page_groups as $default_page_group) {
                //============================ Processing '.......'
                $no_of_succeed_row++;
                $no_of_succeed_row_percentage = ' ' . number_format($no_of_succeed_row / count($default_page_groups) * 100, 0);
                if ($no_of_push != $no_of_succeed_row_percentage) {
                    $data['message'] = trans('greetings.Processing Reset System Default') . ' -> Pages Group : ' . $no_of_succeed_row_percentage . ' %';
                    $pusher->trigger('ResetSystemDefault.' . Auth::user()->id, 'ResetSystemDefault', $data['message']);
                }
                $no_of_push = $no_of_succeed_row_percentage;
                $page_group = new PageGroup();
                $columns = $page_group->getTableColumns();
                $exclude = ['created_at', 'updated_at', 'deleted_at'];
                $decimalColumns = [];
                $dateColumns = ['created_at', 'updated_at'];
                foreach ($columns as $column) {
                    if ($column == 'max_length') {
                        if ($default_page_group->$column == '') {
                            $page_group->$column = 50;
                            continue;
                        }
                    }
                    if (in_array($column, $exclude)) {
                        continue;
                    }
                    if (!isset($default_page_group->$column)) {
                        continue;
                    }
                    if (in_array($column, $decimalColumns)) {
                        if ($default_page_group->$column !== '' && $default_page_group->$column !== null) {
                            $page_group->$column = $this->service->toDouble($default_page_group->$column);
                        }
                    } elseif (in_array($column, $dateColumns)) {
                        $page_group->$column = Carbon::now()->toDateString();
                    } else {
                        $page_group->$column = $default_page_group->$column;
                    }
                }
                $page_group->save();
            }
            $no_of_succeed_row = 0;
            $no_of_push = 0;
            foreach ($default_page_group_field_templates as $default_page_group_field_template) {
                //============================ Processing '.......'
                $no_of_succeed_row++;
                $no_of_succeed_row_percentage = ' ' . number_format($no_of_succeed_row / count($default_page_group_field_templates) * 100, 0);
                if ($no_of_push != $no_of_succeed_row_percentage) {
                    $data['message'] = trans('greetings.Processing Reset System Default') . ' -> Page Group Field Template : ' . $no_of_succeed_row_percentage . ' %';
                    $pusher->trigger('ResetSystemDefault.' . Auth::user()->id, 'ResetSystemDefault', $data['message']);
                }
                $no_of_push = $no_of_succeed_row_percentage;

                $page_group_field_template = new PageGroupFieldTemplate();
                $columns = $page_group_field_template->getTableColumns();
                $exclude = ['created_at', 'updated_at', 'deleted_at', 'url_para_1', 'url_para_1_value', 'url_para_2', 'url_para_2_value', 'url_para_3', 'url_para_3_value', 'url_para_4', 'url_para_4_value', 'url_para_5', 'url_para_5_value', 'url_para_6', 'url_para_6_value', 'url_para_7', 'url_para_7_value', 'url_para_8', 'url_para_8_value', 'url_para_9', 'url_para_9_value'];
                $decimalColumns = [];
                $dateColumns = ['created_at', 'updated_at'];
                foreach ($columns as $column) {
                    if ($column == 'max_length') {
                        if ($default_page_group_field_template->$column == '') {
                            $page_group_field_template->$column = 50;
                            continue;
                        }
                    }
                    if (in_array($column, $exclude)) {
                        continue;
                    }
                    if (!isset($default_page_group_field_template->$column)) {
                        continue;
                    }
                    if (in_array($column, $decimalColumns)) {
                        if ($default_page_group_field_template->$column !== '' && $default_page_group_field_template->$column !== null) {
                            $page_group_field_template->$column = $this->service->toDouble($default_page_group_field_template->$column);
                        }
                    } elseif (in_array($column, $dateColumns)) {
                        $page_group_field_template->$column = Carbon::now()->toDateString();
                    } else {
                        $page_group_field_template->$column = $default_page_group_field_template->$column;
                    }
                }
                $page_group_field_template->save();
            }
            \DB::connection('company')->commit();
            return response()->json(['status' => 'success', 'msg' => trans('greetings.Reset System Default Successfull')]);
        } catch (\Exception $ex) {
            \DB::connection('company')->rollback();
            return response()->json(['status' => 'failed', 'msg' => trans('greetings.RecordSaveFailed'), 'error' => $ex->getMessage()]);
        }
    }
    public function RestoreFromAchive()
    {
        \DB::connection('company')->beginTransaction();
        try {
            //purshser init.
            $options = array(
                'cluster' => 'ap1',
                'encrypted' => true,
            );
            $pusher = new Pusher(
                config('app.pusher_key'),
                config('app.pusher_secret'),
                config('app.pusher_id'),
                $options
            );

            $pages = PageArchived::get();
            $page_groups = PageGroupArchived::get();
            $page_group_field_templates = PageGroupFieldTemplateArchived::get();
            // ================== Delete ===================
            \DB::connection('company')->table('page')->delete();
            \DB::connection('company')->table('page_group')->delete();
            \DB::connection('company')->table('page_group_field_template')->delete();
            //  ============ Create Copies ==============
            $no_of_succeed_row = 0;
            $no_of_push = 0;
            foreach ($pages as $page) {
                //============================ Processing '.......'
                $no_of_succeed_row++;
                $no_of_succeed_row_percentage = ' ' . number_format($no_of_succeed_row / count($pages) * 100, 0) . ' %';
                if ($no_of_push != $no_of_succeed_row_percentage) {
                    $data['message'] = trans('greetings.Processing Restore From Archived') . ' -> Pages : ' . $no_of_succeed_row_percentage;
                    $pusher->trigger('Archive.' . Auth::user()->id, 'Archived', $data['message']);
                }
                $no_of_push = $no_of_succeed_row_percentage;
                $page_archived = new Page();
                $columns = $page_archived->getTableColumns();
                $exclude = ['created_at', 'updated_at', 'deleted_at', 'status'];
                $decimalColumns = [];
                $dateColumns = [];
                foreach ($columns as $column) {
                    if (in_array($column, $exclude)) {
                        continue;
                    }
                    if (!isset($page[$column])) {
                        continue;
                    }
                    if (in_array($column, $decimalColumns)) {
                        if ($page[$column] !== '' && $page[$column] !== null) {
                            $page_archived[$column] = $this->service->toDouble($page[$column]);
                        }
                    } elseif (in_array($column, $dateColumns)) {
                        if ($page[$column] !== '' && $page[$column] !== null) {
                            $page_archived[$column] = Carbon::parse($page[$column])->toDateString();
                        }
                    } else {
                        $page_archived[$column] = $page[$column];
                    }
                }
                $page_archived->save();
            }
            $no_of_succeed_row = 0;
            $no_of_push = 0;
            foreach ($page_groups as $page_group) {
                //============================ Processing '.......'
                $no_of_succeed_row++;
                $no_of_succeed_row_percentage = ' ' . number_format($no_of_succeed_row / count($page_groups) * 100, 0) . ' %';
                if ($no_of_push != $no_of_succeed_row_percentage) {
                    $data['message'] = trans('greetings.Processing Restore From Archived') . ' -> Pages Group : ' . $no_of_succeed_row_percentage;
                    $pusher->trigger('Archive.' . Auth::user()->id, 'Archived', $data['message']);
                }
                $no_of_push = $no_of_succeed_row_percentage;
                $page_group_archived = new PageGroup();
                $columns = $page_group_archived->getTableColumns();
                $exclude = ['created_at', 'updated_at', 'deleted_at'];
                $decimalColumns = [];
                $dateColumns = ['created_at', 'updated_at'];
                foreach ($columns as $column) {
                    if (in_array($column, $exclude)) {
                        continue;
                    }
                    if (!isset($page_group[$column])) {
                        continue;
                    }
                    if (in_array($column, $decimalColumns)) {
                        if ($page_group[$column] !== '' && $page_group[$column] !== null) {
                            $page_group_archived[$column] = $this->service->toDouble($page_group[$column]);
                        }
                    } elseif (in_array($column, $dateColumns)) {
                        $page_group_archived[$column] = Carbon::now()->toDateString();
                    } else {
                        $page_group_archived[$column] = $page_group[$column];
                    }
                }
                $page_group_archived->save();
            }
            $no_of_succeed_row = 0;
            $no_of_push = 0;
            foreach ($page_group_field_templates as $page_group_field_template) {
                //============================ Processing '.......'
                $no_of_succeed_row++;
                $no_of_succeed_row_percentage = ' ' . number_format($no_of_succeed_row / count($page_group_field_templates) * 100, 0);
                if ($no_of_push != $no_of_succeed_row_percentage) {
                    $data['message'] = trans('greetings.Processing Restore From Archived') . ' -> Pages Group Field Template : ' . $no_of_succeed_row_percentage . ' %';
                    $pusher->trigger('Archive.' . Auth::user()->id, 'Archived', $data['message']);
                }
                $no_of_push = $no_of_succeed_row_percentage;
                $page_group_field_template_archived = new PageGroupFieldTemplate();
                $columns = $page_group_field_template_archived->getTableColumns();
                $exclude = ['created_at', 'updated_at', 'deleted_at', 'url_para_1', 'url_para_1_value', 'url_para_2', 'url_para_2_value', 'url_para_3', 'url_para_3_value', 'url_para_4', 'url_para_4_value', 'url_para_5', 'url_para_5_value', 'url_para_6', 'url_para_6_value', 'url_para_7', 'url_para_7_value', 'url_para_8', 'url_para_8_value', 'url_para_9', 'url_para_9_value'];
                $decimalColumns = [];
                $dateColumns = ['created_at', 'updated_at'];
                foreach ($columns as $column) {
                    if (in_array($column, $exclude)) {
                        continue;
                    }
                    if (!isset($page_group_field_template[$column])) {
                        continue;
                    }
                    if (in_array($column, $decimalColumns)) {
                        if ($page_group_field_template[$column] !== '' && $page_group_field_template[$column] !== null) {
                            $page_group_field_template_archived[$column] = $this->service->toDouble($page_group_field_template[$column]);
                        }
                    } elseif (in_array($column, $dateColumns)) {
                        $page_group_page_group_field_template_archivedarchived[$column] = Carbon::now()->toDateString();
                    } else {
                        $page_group_field_template_archived[$column] = $page_group_field_template[$column];
                    }
                }
                $page_group_field_template_archived->save();
            }
            \DB::connection('company')->commit();
            return response()->json(['status' => 'success', 'msg' => trans('greetings.Archived successfull')]);
        } catch (\Exception $ex) {
            \DB::connection('company')->rollback();
        }
    }
    public function UpdatePage(Request $request){
        $data = $request->all();
        $page_id = $data['code'];
        $document_type = $data['document_type'];
        if($document_type == 'Update'){
            $page_id = $this->service->decrypt($data['code']);
        }
        
        //purshser init.
        $options = $this->options;
        $pusher = $this->pusher;
        $default_pages = \DB::connection('mysql')->table('page')->where('id', $page_id)->get();
        if(count($default_pages) <= 0){
            return response()->json(['status' => 'warning', 'msg' => trans('greetings.Page id not found!')]);
        }
        $default_page_groups = \DB::connection('mysql')->table('page_group')->where('object_id', $page_id)->get();
        $default_page_group_field_templates = \DB::connection('mysql')->table('page_group_field_template')->where('object_id', $page_id)->get();
        \DB::connection('company')->beginTransaction();
        try {
            \DB::connection('company')->table('page')->where('id', $page_id)->delete();
            \DB::connection('company')->table('page_group')->where('object_id', $page_id)->delete();
            \DB::connection('company')->table('page_group_field_template')->where('object_id', $page_id)->delete();

            //  ============ Create Copies ================
            // =============== Page =======================
             $no_of_succeed_row = 0;
             $no_of_push = 0;
            
            foreach ($default_pages as $default_page) {
                //============================ Processing '.......'
                $no_of_succeed_row++;
                $no_of_succeed_row_percentage = ' ' . number_format($no_of_succeed_row / count($default_pages) * 100, 0);
                if ($no_of_push != $no_of_succeed_row_percentage) {
                    $data['message'] = trans('greetings.Processing Update') . ' -> Pages : ' . $no_of_succeed_row_percentage . ' %';
                    $pusher->trigger('UpdateDefault.' . Auth::user()->id, 'UpdateDefault', $data['message']);
                }
                $no_of_push = $no_of_succeed_row_percentage;

                $page = new Page();
                $columns = $page->getTableColumns();
                $exclude = ['created_at', 'updated_at', 'deleted_at', 'status'];
                $decimalColumns = [];
                $dateColumns = [];
                foreach ($columns as $column) {
                    if ($column == 'max_length') {
                        if ($default_page->$column == '') {
                            $page->$column = 50;
                            continue;
                        }
                    }
                    if (in_array($column, $exclude)) {
                        continue;
                    }
                    if (!isset($default_page->$column)) {
                        continue;
                    }
                    if (in_array($column, $decimalColumns)) {
                        if ($default_page->$column !== '' && $default_page->$column !== null) {
                            $page->$column = $this->service->toDouble($default_page->$column);
                        }
                    } elseif (in_array($column, $dateColumns)) {
                        if ($default_page->$column !== '' && $default_page->$column !== null) {
                            $page->$column = Carbon::parse($default_page->$column)->toDateString();
                        }
                    } else {
                        $page->$column = $default_page->$column;
                    }

                }
                $page->save();
            }
            // =============== Page Group =======================
            $no_of_succeed_row = 0;
            $no_of_push = 0;
            foreach ($default_page_groups as $default_page_group) {
                //============================ Processing '.......'
                $no_of_succeed_row++;
                $no_of_succeed_row_percentage = ' ' . number_format($no_of_succeed_row / count($default_page_groups) * 100, 0);
                if ($no_of_push != $no_of_succeed_row_percentage) {
                    $data['message'] = trans('greetings.Processing Reset System Default') . ' -> Pages Group : ' . $no_of_succeed_row_percentage . ' %';
                    $pusher->trigger('UpdateDefault.' . Auth::user()->id, 'UpdateDefault', $data['message']);
                }
                $no_of_push = $no_of_succeed_row_percentage;
                $page_group = new PageGroup();
                $columns = $page_group->getTableColumns();
                $exclude = ['created_at', 'updated_at', 'deleted_at'];
                $decimalColumns = [];
                $dateColumns = ['created_at', 'updated_at'];
                foreach ($columns as $column) {
                    if ($column == 'max_length') {
                        if ($default_page_group->$column == '') {
                            $page_group->$column = 50;
                            continue;
                        }
                    }
                    if (in_array($column, $exclude)) {
                        continue;
                    }
                    if (!isset($default_page_group->$column)) {
                        continue;
                    }
                    if (in_array($column, $decimalColumns)) {
                        if ($default_page_group->$column !== '' && $default_page_group->$column !== null) {
                            $page_group->$column = $this->service->toDouble($default_page_group->$column);
                        }
                    } elseif (in_array($column, $dateColumns)) {
                        $page_group->$column = Carbon::now()->toDateString();
                    } else {
                        $page_group->$column = $default_page_group->$column;
                    }
                }
                $page_group->save();
            }
            // =============== Page Group Template =======================
            $no_of_succeed_row = 0;
            $no_of_push = 0;
            foreach ($default_page_group_field_templates as $default_page_group_field_template) {
                //============================ Processing '.......'
                $no_of_succeed_row++;
                $no_of_succeed_row_percentage = ' ' . number_format($no_of_succeed_row / count($default_page_group_field_templates) * 100, 0);
                if ($no_of_push != $no_of_succeed_row_percentage) {
                    $data['message'] = trans('greetings.Processing Reset System Default') . ' -> Page Group Field Template : ' . $no_of_succeed_row_percentage . ' %';
                    $pusher->trigger('UpdateDefault.' . Auth::user()->id, 'UpdateDefault', $data['message']);
                }
                $no_of_push = $no_of_succeed_row_percentage;

                $page_group_field_template = new PageGroupFieldTemplate();
                $columns = $page_group_field_template->getTableColumns();
                $exclude = ['created_at', 'updated_at', 'deleted_at', 'url_para_1', 'url_para_1_value', 'url_para_2', 'url_para_2_value', 'url_para_3', 'url_para_3_value', 'url_para_4', 'url_para_4_value', 'url_para_5', 'url_para_5_value', 'url_para_6', 'url_para_6_value', 'url_para_7', 'url_para_7_value', 'url_para_8', 'url_para_8_value', 'url_para_9', 'url_para_9_value'];
                $decimalColumns = [];
                $dateColumns = ['created_at', 'updated_at'];
                foreach ($columns as $column) {
                    if ($column == 'max_length') {
                        if ($default_page_group_field_template->$column == '') {
                            $page_group_field_template->$column = 50;
                            continue;
                        }
                    }
                    if (in_array($column, $exclude)) {
                        continue;
                    }
                    if (!isset($default_page_group_field_template->$column)) {
                        continue;
                    }
                    if (in_array($column, $decimalColumns)) {
                        if ($default_page_group_field_template->$column !== '' && $default_page_group_field_template->$column !== null) {
                            $page_group_field_template->$column = $this->service->toDouble($default_page_group_field_template->$column);
                        }
                    } elseif (in_array($column, $dateColumns)) {
                        $page_group_field_template->$column = Carbon::now()->toDateString();
                    } else {
                        $page_group_field_template->$column = $default_page_group_field_template->$column;
                    }
                }
                $page_group_field_template->save();
            }
            \DB::connection('company')->commit();
            return response()->json(['status' => 'success', 'msg' => trans('greetings.Reset System Default Successfull')]);
        }catch (\Exception $ex) {
            \DB::connection('company')->rollback();
        }
        
    }

    public function createNewPage(Request $request)
    {
        $path = app_path() . "/Models";
        $get_modals_paths = $this->service->getModels($path);

        \DB::connection('company')->beginTransaction();
        try {
            $page = Page::where('id',$request->page_id)->first();
            if($page) return response()->json(['status' => 'failed', 'msg' => 'Page id ['.$request->page_id.'] aready existed' ]);
            $table = null;
            $model = null;
            // if($request->page_type != "Report") {
            if(trim($request->table_name) != "") {
                $table = Tables::where('id', $request->table_name)->first();
                if(!$table) return response()->json(['status' => 'failed', 'msg' => 'Table not found1' ]);
                $model = array_key_exists($table->table_name,$get_modals_paths) ? $get_modals_paths[$table->table_name] : ''; 
                if(!$model || $model == '') return response()->json(['status' => 'failed', 'msg' => 'Model not found' ]);
            }
        
            $department = \DB::connection('company')->table('menu_department')->where('id',$request->department)->first();
            $group = \DB::connection('company')->table('menu_group')->where('id',$request->menu_group)->first();            
            $pages_to_create_menu = ['List', 'Card', 'List_Popup', 'List_Card', 'Report'];            
            $pages_to_create_sub_group = ['List', 'Card', 'List_Popup', 'List_Card', 'Report'];            
            $pages_to_create_card = ['List_Popup', 'List_Card'];            
            
            $this->page_type = $request->page_type;
            $this->list_option_type = $request->list_option_type;
            $this->model_path = $model;
            $this->table_primary_key = $model? \App::make($model)->getKeyName() : '';
            $this->reference_serail = $request->reference_name;
            $this->auto_incressment = $request->auto_incressment;

            $page_title = $request->page_title;
            $page_id = $request->page_id;
            $page_type = $request->page_type;
            $page_url = $request->page_url;
            $department_name = $department->name;                        

            // SETUP MAIN PAGE 
            $main_page = new Page();
            $main_page->id = $page_id;
            $main_page->object_name = $page_title;
            $main_page->title = $page_title;
            $main_page->table_id = $table? $table->id : null;
            $main_page->table_name =  $table? $table->table_name : '';            
            $main_page->department = $department_name;
            $main_page->url_link = $page_url;            
            if($page_type == 'List' || $page_type == 'List_Popup' || $page_type == 'List_Card') $main_page->type = 'List';
            else if($page_type == 'Card') $main_page->type = 'Card';
            else if($page_type == 'Report') $main_page->type = 'Report';            
            else $main_page->type = $page_type;            
            $main_page->save();

            // SETUP MAIN GROUP
            if(in_array($page_type, $pages_to_create_sub_group)){
                $main_page_group = new PageGroup();
                $main_page_group->id = $main_page->id + 100;
                $main_page_group->object_id = $main_page->id;
                $main_page_group->description = 'General';
                $main_page_group->table_name = $main_page->table_name;
                $main_page_group->freeze_column_no = 0;
                $main_page_group->group_range = 1;
                $main_page_group->stage = 'in';                
                $main_page_group->type = strtolower($main_page->type); 
                $main_page_group->save();
            }

            // SETUP MANU
            if(in_array($page_type, $pages_to_create_menu)) {
                $menu_url_index = MenuUrl::where('menu_department_id',$department->id)->where('menu_group_id',$request->menu_group)->max('index');
                $url_index = 1;
                if($menu_url_index) $url_index = $menu_url_index + 1; 
                $url = new MenuUrl();
                $url->code = $main_page->object_name;
                $url->object_id = $main_page->id;
                $url->menu_department_id = $department->id;
                $url->menu_group_id = $request->menu_group;
                $url->menu_name = $main_page->object_name;
                $url->index = $url_index;
                $url->menu_type = 'Menu';
                $url->department_name = $department->name;
                $url->department_index = $department->Index;
                $url->group_name = $group ? $group->name : '';
                $url->group_index = $group ? $group->index : 0;
                $url->url = $main_page->url_link;
                $url->save();
            }

            // SETUP DEFAULT PERMISSION FOR ADMIN
            $permissin_object = new PermissionObjects();
            $permissin_object->permission_code = 'ADMIN';
            $permissin_object->object_id = $main_page->id;
            $permissin_object->object_name = $main_page->object_name;
            $permissin_object->insert_record = 'Yes';
            $permissin_object->delete_record = 'Yes';
            $permissin_object->update_record = 'Yes';
            $permissin_object->execute = 'Yes';
            $permissin_object->foundation = 'No';
            $permissin_object->department_code = $department->name;
            $permissin_object->save();

            // SETUP DEFAULT LICENSE
            $license_page = new LicensePages();
            $license_page->code = '200100';
            $license_page->page_id = $main_page->id;
            $license_page->department = $department->name;
            $license_page->description = $main_page->table_name;
            $license_page->licensed = 'Yes';
            $license_page->foundation = 'No';
            $license_page->save();  

            // SETUP POPUP CARD OR CARD
            $card_page = null;
            if(in_array($page_type, $pages_to_create_card)){
                // SETUP MAIN PAGE 
                $card_page = new Page();
                $card_page->id = $main_page->id + 1000;
                $card_page->object_name = $page_title.' Card';
                $card_page->title = $page_title.' Card';
                $card_page->table_id = $table->id;
                $card_page->table_name = $table->table_name;            
                $card_page->department = $department_name;                
                $card_page->type = 'Card';
                $card_page->save();

                $card_page_group = new PageGroup();
                $card_page_group->id = $card_page->id + 100;
                $card_page_group->object_id = $card_page->id;
                $card_page_group->description = 'General';
                $card_page_group->table_name = $card_page->table_name;
                $card_page_group->freeze_column_no = 0;
                $card_page_group->group_range = 1;
                $card_page_group->stage = 'in';                
                $card_page_group->type = 'page'; 
                $card_page_group->save();

                // SETUP DEFAULT PERMISSION FOR ADMIN
                $permissin_object = new PermissionObjects();
                $permissin_object->permission_code = 'ADMIN';
                $permissin_object->object_id = $card_page->id;
                $permissin_object->object_name = $card_page->object_name;
                $permissin_object->insert_record = 'Yes';
                $permissin_object->delete_record = 'Yes';
                $permissin_object->update_record = 'Yes';
                $permissin_object->execute = 'Yes';
                $permissin_object->foundation = 'No';
                $permissin_object->department_code = $department->name;
                $permissin_object->save();

                // SETUP DEFAULT LICENSE
                $license_page = new LicensePages();
                $license_page->code = '200100';
                $license_page->page_id = $card_page->id;
                $license_page->department = $department->name;
                $license_page->description = $card_page->table_name;
                $license_page->licensed = 'Yes';
                $license_page->foundation = 'No';
                $license_page->save();  

                $this->is_create_card = 'Yes';
                $this->card_page_id = $card_page->id;
            }
                                     
            $result = $this->intailTemplate($request, $main_page,$card_page, $table);
            if($result['status'] == 'failed'){
                \DB::connection('company')->rollback();
                return response()->json(['status' => 'failed', 'msg' => $result['msg'], 'url' => '' , 'route' => '']);
            };

            \DB::connection('company')->commit();        
            $url = url('system-setting/customize-page?page_id='.$this->service->encrypt($main_page->id).'&type='.$this->service->encrypt($main_page->type));
            return response()->json(['status' => 'success', 'url' => $url , 'route' => $this->route]);

        } catch (\Exception $ex) {
            \DB::connection('company')->rollback();
            return response()->json(['status' => 'failed', 'msg' => $ex->getMessage() . $ex->getLine()]);
        }
    }
    public function departmentChange(Request $request)
    {
       if(!$request->ajax())  return response()->view('errors.404');
      try {

        $groups = \DB::connection('company')->table('menu_group')->where('menu_department_id',$request->value)->orderBy('name')->get(['id','code','name']);
        if(count($groups) <= 0) $groups = [];
        return response()->json(['status' => 'success', 'records' => $groups]);

      } catch (\Exception $ex) {
         return $ex->getMessage();
          
      }
    }

    public function getLastPageId() {
        $records = DB::connection('company')->table('page')->selectRaw(" SUBSTRING(id, 1, 1) prefix ,  max(id) + 1000 as new_id ")->groupBy(\DB::raw('SUBSTRING(id, 1, 1)'))->get(); 
        $record = $records->where('prefix',2)->first();
        return response()->json(['status' => 'success', 'record' => $record]);
        
    }

    public function getSubDirectories($dir)
    {
        $subDir = [];
        $directories = array_filter(glob($dir), 'is_dir');
        foreach ($directories as $directory) {
            array_push($subDir,$directory);
            if($this->getSubDirectories($directory.'/*')) {
                array_push($subDir, $this->getSubDirectories($directory.'/*'));
            }
        }
        
        $finalArrays = array_flatten($subDir);
        return $finalArrays;
    }

    public function getFileInFolder($dir) {
       return glob($dir);
    }

    protected function intailTemplate($request, $page,$card_page, $table) {    
        
        if($this->page_type == 'Report') {
            return ['status' => 'success'];
        }
        
        if($request->blade_path !="" && $request->blade_name !="") {
            $path = $request->blade_path;
            $file = $request->blade_name;
            $option = 'view';
            $class_name = strtok($file,'.');
            $name_space = substr($path,strlen(resource_path('\view'))+1);
            $name_space = str_replace('/', '.',$name_space.'.'.$class_name);

            $this->blade_path = $name_space;
            
            $prepaired = $this->view($request,$page,$table);
            $arr_temples = $prepaired['str_temp'];
            $arr_replaceemnts = $prepaired['str_replace'];

            if(!file_exists($path.'/'.$file)) {
               $result = $this->makeDirectory($path,$file,$option,$arr_temples,$arr_replaceemnts);
               if($result == 'template_empty') ['status' => 'failed','msg' => 'Blade template not found'];;
            }
            if($this->page_type != "Card") {

                $option = 'list_list';
                $path = $request->blade_path;
                $file = $request->blade_name;
                $base_name = strtok($file,'.');
                $file = $base_name.'_list.blade.php';
    
                $prepaired = $this->view($request,$page,$table);
                $arr_temples = $prepaired['str_temp'];
                $arr_replaceemnts = $prepaired['str_replace'];
    
                if(!file_exists($path.'/'.$file)) {
                    $result = $this->makeDirectory($path,$file,$option,$arr_temples,$arr_replaceemnts);
                    if($result == 'template_empty') ['status' => 'failed','msg' => 'List blade template not found'];;
                }
    
                $option = 'list_record';
                $file = $request->blade_name;
                $base_name = strtok($file,'.');
                $file = $base_name.'_records.blade.php';
                if(!file_exists($path.'/'.$file)) {
                    $result = $this->makeDirectory($path,$file,$option,$arr_temples,$arr_replaceemnts);
                    if($result == 'template_empty') ['status' => 'failed','msg' => 'Record blade template not found'];;
                }
            }
        }

        if($request->blade_card_name !="" && $this->page_type == 'List_Card') {

            $path = $request->blade_path;
            $file = $request->blade_card_name;
            $option = 'view_card';
        
            $prepaired = $this->view($request,$page,$table);
            $arr_temples = $prepaired['str_temp'];
            $arr_replaceemnts = $prepaired['str_replace'];

            if(!file_exists($path.'/'.$file)) {
                $result = $this->makeDirectory($path,$file,$option,$arr_temples,$arr_replaceemnts);
                if($result == 'template_empty') ['status' => 'failed','msg' => 'Card template not found'];;
            }

            $option = 'subline';
            $path = $request->blade_path;
            $file = $request->blade_name;
            $base_name = strtok($file,'.');
            $file = $base_name.'_subline.blade.php';

            $prepaired = $this->view($request,$page,$table);
            $arr_temples = $prepaired['str_temp'];
            $arr_replaceemnts = $prepaired['str_replace'];

            if(!file_exists($path.'/'.$file)) {
                $result = $this->makeDirectory($path,$file,$option,$arr_temples,$arr_replaceemnts);
                if($result == 'template_empty') ['status' => 'failed','msg' => 'List blade template not found'];;
            }

            $option = 'subline_record';
            $path = $request->blade_path;
            $file = $request->blade_name;
            $base_name = strtok($file,'.');
            $file = $base_name.'_subline_record.blade.php';

            $prepaired = $this->view($request,$page,$table);
            $arr_temples = $prepaired['str_temp'];
            $arr_replaceemnts = $prepaired['str_replace'];

            if(!file_exists($path.'/'.$file)) {
                $result = $this->makeDirectory($path,$file,$option,$arr_temples,$arr_replaceemnts);
                if($result == 'template_empty') ['status' => 'failed','msg' => 'List blade template not found'];;
            }
        }

        if($request->blade_card_name !="" && $this->page_type == 'List_Popup') {
            $path = $request->blade_path;
            $file = $request->blade_card_name;
            $option = 'popup_card';
        
            $prepaired = $this->view($request,$page,$table);
            $arr_temples = $prepaired['str_temp'];
            $arr_replaceemnts = $prepaired['str_replace'];

            if(!file_exists($path.'/'.$file)) {
                $result = $this->makeDirectory($path,$file,$option,$arr_temples,$arr_replaceemnts);
                if($result == 'template_empty') ['status' => 'failed','msg' => 'Card template not found'];
            }
        }

        if($request->contoller_path !="" && $request->controller_name !="" ) {

            $path = $request->contoller_path;
            $file = $request->controller_name;
            $option = 'controller';
            $class_name = strtok($file,'.');
            $name_space1 = substr($path,strlen(app_path()));
            $name_space = str_replace('/', '\\','App'.$name_space1);

            $prepaired = $this->controller($request,$page,$table,$class_name,$name_space);
            $arr_temples = $prepaired['str_temp'];
            $arr_replaceemnts = $prepaired['str_replace'];
        
            if(!file_exists($path.'/'.$file)) {
                $result = $this->makeDirectory($path,$file,$option,$arr_temples,$arr_replaceemnts);
                if($result == 'template_empty') ['status' => 'failed','msg' => 'Controller template not found'];
                $controllerRouteNameSpace = str_replace('/', '\\',substr($name_space1,strlen('/Http/Controllers/')));
                $this->route = $this->route($page->id,$page->title,$page->url_link,$class_name,$controllerRouteNameSpace);

                if($request->has('route_path') && $request->route_path != '') {
                    $this->appendNewRoute($request->route_path);
                }
             }
        }

        return ['status' => 'success'];
    }

    protected function modal($request,$table,$name_space,$class_name){
        $arr_temples = [
            'ClearViewNameSpace' => $name_space,
            'ClearViewNameModelClassName' => $class_name ,
            'ClearViewTableName' => $table->table_name,
            'ClearViewCreatedBy' => Auth::user()->email,
            'ClearViewDate' =>\Carbon\Carbon::now()->toDateTimeString(),
        ];
              
        return $this->prepaireStrReplacement($arr_temples);
    }
    protected function view($request,$page,$table){
        $name_space1 = 'system.general.card';
        if($this->page_type == 'List_Popup') {
            $path1 = $request->blade_path;
            $file1 = $request->blade_card_name;
            $file_card_name = strtok($file1,'.');
            $name_space1 = substr($path1,strlen(resource_path('\view'))+1);
            $name_space1 = str_replace('/', '.',$name_space1.'.'.$file_card_name);
        }
        
       $arr_temples = [
            'ClearViewMenuUrl' => $page->url_link,
            'ClearViewPageTitle' => $page->object_name,
            'ClearViewTable' => $table->table_name ?? '',
            'ClearViewPageId' => $page->id ?? '',
            'ClearViewBladePth' => $this->blade_path,
            'ClearViewPopupCardBlade' => $name_space1,
        ];
       return $this->prepaireStrReplacement($arr_temples);
    }
    protected function controller($request,$page,$table,$class_name,$name_space){
        $name_space1 = 'system.general.card';
        if($this->page_type == 'List_Popup') {
            $path1 = $request->blade_path;
            $file1 = $request->blade_card_name;
            $file_card_name = strtok($file1,'.');
            $name_space1 = substr($path1,strlen(resource_path('\view'))+1);
            $name_space1 = str_replace('/', '.',$name_space1.'.'.$file_card_name);
        }

        $arr_temples = [
            'ClearViewNameSpace' => $name_space ?? '',
            'ClearViewClassName' => $class_name ?? '',
            'ClearViewPageId' => $page->id ?? '',
            'ClearViewTable' => $table->table_name ?? '',
            'ClearViewModalPath' => $this->model_path,
            'ClearViewBladePth' => $this->blade_path,
            'ClearViewPopupCardBlade' => $name_space1,
            'ClearViewPageTitle' => $page->object_name, 
            'ClearViewReferemceSerial' => $this->reference_serail, 
            'ClearViewCardPageId' => $this->card_page_id,
            'ClearViewCreatedBy' => Auth::user()->email,
            'ClearViewDate' =>\Carbon\Carbon::now()->toDateTimeString(),
            'ClearViewMenuUrl' => $page->url_link ?? '',
            'ClearViewSheetName' => Str::slug($page->object_name,'-'),
            'ClearViewOrderBy' => $this->table_primary_key,
        ];

        return $this->prepaireStrReplacement($arr_temples);
    }

    protected function prepaireStrReplacement($arrs = []) {
        $str_arr_temp = [];
        $str_arr_will_replace = [];
        foreach($arrs as $key => $value ){
            array_push($str_arr_temp,$key);
            array_push($str_arr_will_replace,$value);
        }
        return [
            'str_temp' => $str_arr_temp,
            'str_replace' => $str_arr_will_replace,
        ];
    }

    protected function makeDirectory($path,$file,$option,$arr_temples,$arr_replaceemnts)
    {
        if(!is_dir($path)) mkdir($path, 0775, true);

        $tempPath = $this->getTemplatgeOption($option);

        if($tempPath == '') return 'template_empty';

        $path = $path.'/'.$file;
        if(file_exists($path)) return 'file_exists';

        $this->writePrepaireFile($path,$tempPath,$option,$arr_temples,$arr_replaceemnts);
        return $path;
    }

    protected function getTemplatgeOption($option) {
        switch ($option) {
            case 'view':
                return $this->viewOption();
                break;
            case 'controller':
                return $this->controllerOption();
                break;
            case 'view_card':
                return $this->viewCardOption();
                break;
            case 'list_list':
                return $this->viewListOption();
                break;
            case 'list_record':
                return $this->viewRecordOption();
                break;
            case 'subline':
                return $this->viewSublineOption();
                break;
            case 'subline_record':
                return $this->viewSublineRecordOption();
                break;
            case 'popup_card': 
                return $this->viewPopupCardOption();
                break;
            default:
                break;
        }
    }

    public function writePrepaireFile($path,$tempPath,$option,$arr_temples,$arr_replaceemnts)
    {
        $current_template = file_get_contents($tempPath);
        $current_template = $this->replaceNamespace($current_template,$arr_temples,$arr_replaceemnts);
        $this->writeFileContent($path, $current_template);
    }

    protected function writeFileContent($file, $content){
        $fp = fopen($file, 'w');
        fwrite($fp, $content);
        fclose($fp);
       
        chmod($file, 0777);
        return true;
    }

    protected function viewCardOption(){
        return resource_path('templates/view_list_and_card_card.stub');
    }

    protected function viewSublineOption(){
        return resource_path('templates/view_subline.stub');
    }
    
    protected function viewSublineRecordOption(){
        return resource_path('templates/view_subline_record.stub');
    }

    protected function viewListOption(){
        switch ($this->page_type) {
            case 'List':
                $tempPath = resource_path('templates/view_list_list.stub');
                break;
            case 'Report':
                $tempPath = resource_path('templates/view_report_list.stub');
                break;
            case 'List_Card':
                $tempPath = resource_path('templates/view_list_and_card_list.stub'); //view_list_and_card_list
                break;
            case 'List_Popup':
                $tempPath = resource_path('templates/view_list_popup_cart_list.stub');
                break;
            default:
                $tempPath = '';
                break;
        }

        return $tempPath;
    }

    protected function viewRecordOption(){
        switch ($this->page_type) {
            case 'List':
                $tempPath = resource_path('templates/view_list_record.stub');
                break;
            case 'Report':
                $tempPath = resource_path('templates/view_report_record.stub');
                break;
            case 'List_Card':
                $tempPath = resource_path('templates/view_list_and_card_record.stub');
                break;
            case 'List_Popup':
                $tempPath = resource_path('templates/view_list_popup_cart_record.stub');
                break;
            default:
                $tempPath = '';
                break;
        }

        return $tempPath;
    }

    protected function viewOption() {
        switch ($this->page_type) {
            case 'List':
                $tempPath = resource_path('templates/view_list.stub');
                break;
            case 'Card':
                $tempPath = resource_path('templates/view_card.stub');
                break;
            case 'List_Popup':
                $tempPath = resource_path('templates/view_list_and_popup.stub');
                break;
            case 'List_Card':
                $tempPath = resource_path('templates/view_list_and_card.stub'); //view_advance
                break;
            case 'Report':
                $tempPath = resource_path('templates/view_report_record.stub');
                break;
            default:
                $tempPath = '';
                break;
        }

        return $tempPath;
    }

    protected function viewPopupCardOption() {
        $tempPath = resource_path('templates/popup_card.stub');
        return $tempPath;
    }

    protected function controllerOption() {
        if($this->page_type == 'List') {
            $tempPath = resource_path('templates/controller_list.stub');;;
        }elseif($this->page_type == 'Card') {
            $tempPath = resource_path('templates/controller_card.stub');
        }elseif($this->page_type == 'List_Popup') {
            if($this->auto_incressment == 'Yes') {
                $tempPath = resource_path('templates/controller_list_and_popup_auto_incressment.stub');
            }else{
                $tempPath = resource_path('templates/controller_list_and_popup.stub');
            }
        }elseif($this->page_type == 'List_Card') {
            if($this->list_option_type == 'usecode') {
                $tempPath = resource_path('templates/controller_list_and_card.stub');
            }else{
                $tempPath = resource_path('templates/controller_list_and_card_serail.stub');
            }
        }

        return $tempPath;
    }
    protected function appendNewRoute($route_path) {

        $fp = fopen($route_path,'a'); 
        fwrite($fp,$this->route);   
        fclose($fp);

        $this->route = '';
        return true;
    }
    protected function replaceNamespace($stub,$arr_temples,$arr_replaceemnts)
    {
        return str_replace( $arr_temples,$arr_replaceemnts, $stub );
    }
    protected function route($object_id,$object_name,$prefix,$controller_name,$name_space) {

        switch ($this->page_type) {
            case 'List_Card':
                $route = $this->routeListCard($object_id,$object_name,$prefix,$controller_name,$name_space);
                break;
            case 'Card':
                $route = $this->routeCard($object_id,$object_name,$prefix,$controller_name,$name_space);
                break;
            case 'List':
                $route = $this->routeList($object_id,$object_name,$prefix,$controller_name,$name_space);
                break;
            default:
                $route = $this->routeDefault($object_id,$object_name,$prefix,$controller_name,$name_space);
                break;
        }

        return $route;
    }
    
    /**
     * Do not indent all route template
     */
    protected function routeListCard($object_id,$object_name,$prefix,$controller_name,$name_space) {
        return "\nRoute::group(['prefix' => '$prefix', 'namespace' => '$name_space', 'middleware' => 'erp', 'object_id' => '$object_id', 'object_name' => '$object_name'], function () {
    Route::get('/',['as' => '$prefix.index', 'uses' => '$controller_name@index', 'middleware' => 'erpindex']);
    Route::get('/search',['as' => '$prefix.search', 'uses' => '$controller_name@search']);
    Route::get('/transaction',['as' => '$prefix.transaction', 'uses' => '$controller_name@indexCard']);
    Route::post('/update',['as' => '$prefix.update', 'uses' => '$controller_name@store']);
    Route::get('/generate',['as' => '$prefix.generate', 'uses' => '$controller_name@generateNoSeries']);
    Route::get('/searchbox',['as' => '$prefix.searchbox', 'uses' => '$controller_name@searchbox']);
    Route::post('/generatepopupline',['as' => '$prefix.generatepopupline', 'uses' => '$controller_name@addNewSublineRecord']);
    Route::post('/generaterow',['as' => '$prefix.generaterow', 'uses' => '$controller_name@addNewSublineRecord']);
    Route::post('/store-popup-list',['as' => '$prefix.store-popup-list', 'uses' => '$controller_name@storeLine']);
    Route::post('/store-line',['as' => '$prefix.store-line', 'uses' => '$controller_name@storeLine']);
    Route::post('/delete-line',['as' => '$prefix.delete-line', 'uses' => '$controller_name@deleteLine']);
    Route::get('/show-group',['as' => '$prefix.show-group', 'uses' => '$controller_name@indexLine']);
    Route::get('/popup-pagination',['as' => '$prefix.popup-pagination', 'uses' => '$controller_name@indexLine']);
    Route::get('/subline-pagination',['as' => '$prefix.subline-pagination', 'uses' => '$controller_name@sublinePagination']);
    Route::post('/delete',['as' => '$prefix.delete', 'uses' => '$controller_name@delete']);
    Route::post('/import_excel',['as' => '$prefix.import_excel', 'uses' => '$controller_name@ImportExcel']);
    Route::post('/do_import',['as' => '$prefix.do_import', 'uses' => '$controller_name@DoImportExcel']); 
    Route::match(['get','post'],'/download',['as' => '$prefix.download', 'uses' => '$controller_name@downloadExcel']);
    });";
        }

        protected function routeCard($object_id,$object_name,$prefix,$controller_name,$name_space) {
            return "\nRoute::group(['prefix' => '$prefix', 'namespace' => '$name_space', 'middleware' => 'erp', 'object_id' => '$object_id', 'object_name' => '$object_name'], function () {
        Route::get('/',['as' => '$prefix.index', 'uses' => '$controller_name@index', 'middleware' => 'erpindex']);
        Route::post('/update',['as' => '$prefix.update', 'uses' => '$controller_name@update']);
    });";
        }
        protected function routeDefault($object_id,$object_name,$prefix,$controller_name,$name_space) {
            return "\nRoute::group(['prefix' => '$prefix', 'namespace' => '$name_space', 'middleware' => 'erp', 'object_id' => '$object_id', 'object_name' => '$object_name'], function () {
        Route::get('/',['as' => '$prefix.index', 'uses' => '$controller_name@index', 'middleware' => 'erpindex']);
        Route::get('/show',['as' => '$prefix.show', 'uses' => '$controller_name@show']);
        Route::post('/store',['as' => '$prefix.store', 'uses' => '$controller_name@store']);
        Route::post('/update',['as' => '$prefix.update', 'uses' => '$controller_name@update']);
        Route::post('/delete',['as' => '$prefix.delete', 'uses' => '$controller_name@delete']);
        Route::get('/search',['as' => '$prefix.search', 'uses' => '$controller_name@search']);
        Route::get('/duplicate/{code}',['as' => '$prefix.duplicate', 'uses' => '$controller_name@duplicate']);
        Route::match(['get','post'],'/download',['as' => '$prefix.download', 'uses' => '$controller_name@downloadExcel']);
        Route::post('/import_excel',['as' => '$prefix.import_excel', 'uses' => '$controller_name@ImportExcel']);
        Route::post('/do_import',['as' => '$prefix.do_import', 'uses' => '$controller_name@DoImportExcel']);
    });";
        }

        protected function routeList($object_id,$object_name,$prefix,$controller_name,$name_space) {
            return "\nRoute::group(['prefix' => '$prefix', 'namespace' => '$name_space', 'middleware' => 'erp', 'object_id' => '$object_id', 'object_name' => '$object_name'], function () {
        Route::get('/',['as' => '$prefix.index', 'uses' => '$controller_name@index', 'middleware' => 'erpindex']); 
        Route::get('/search',['as' => '$prefix.search', 'uses' => '$controller_name@search']); 
        Route::get('/advancesearch',['as' => '$prefix.advanceSearch', 'uses' => '$controller_name@advanceSearch']); 
        Route::get('/ajaxpagination',['as' => '$prefix.ajaxpagination', 'uses' => '$controller_name@ajaxPagination']); 
        Route::match(['get','post'],'/download',['as' => '$prefix.download', 'uses' => '$controller_name@downloadExcel']); 
    });";
    }
}
