<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ItemGroupController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ItemBrandController;
use App\Http\Controllers\MenuGroupController;
use App\Http\Controllers\ItemCategoryController;
use App\Http\Controllers\ItemControll;
use App\Http\Controllers\SlideShowController;
use App\Http\Controllers\SystemController;
use App\Http\Controllers\TableController;
use App\Http\Controllers\WarehouseController;
use App\Models\SlideShowModel;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/datetime', function () {
    return view('admin.datetime');
});
Route::get('/adminprofile', function () {
    return view('admin.profile.profileadmin');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});

// Begin User Controller

//Dashboard Controller
Route::group(['prefix' => 'home'], function () {
    Route::resource('', DashboardController::class);
    Route::post('/telegram_alert', [DashboardController::class, 'test']);
});

//End user Controller


// Begin Admin Route
Route::group(['prefix' => 'dashboard'], function () {
    Route::resource('/dashboard', DashboardController::class);

});

Route::group(['middleware' => 'admin'], function () {
    
    Route::group(['prefix' => 'admin'], function () {
        Route::resource('/dashboard', AdminDashboardController::class);

    });
    //Table
    Route::group(['prefix' => 'table'], function () {
        Route::resource('/table', TableController::class);
        Route::post('/add_table', [TableController::class, 'create']);
        Route::get('/table_field', [TableController::class, 'table_filed']);
        Route::post('/build', [TableController::class, 'build']);
        Route::get('/ajaxpagination', [TableController::class, 'Ajaxpaginat']);
    });
    //Menu
    Route::group(['prefix' => 'menu'], function () {
        Route::resource('/menu', MenuController::class);
        Route::get('/getmodal', [MenuController::class, 'modal']);
        Route::post('/submit', [MenuController::class, 'submit']);
        Route::post('/delete', [MenuController::class, 'delete']);
        Route::get('/export', [MenuController::class, 'exportExcell']);
    });
    //Menu Group
    Route::group(['prefix' => 'menu_group'], function () {
        Route::resource('/menu_group', MenuGroupController::class);
        Route::get('/getmodal', [MenuGroupController::class, 'modal']);
        Route::post('/submit', [MenuGroupController::class, 'submit']);
        Route::post('/delete', [MenuGroupController::class, 'delete']);

    });
    Route::group(['prefix' => 'item_group'], function () {
        Route::resource('/item_group', ItemGroupController::class);
        Route::get('/getmodal', [ItemGroupController::class, 'modal']);
        Route::post('/submit', [ItemGroupController::class, 'submit']);
        Route::post('/delete', [ItemGroupController::class, 'delete']);

    });
    Route::group(['prefix' => 'item_category'], function () {
        Route::resource('/item_category', ItemCategoryController::class);
        Route::get('/getmodal', [ItemCategoryController::class, 'modal']);
        Route::post('/submit', [ItemCategoryController::class, 'submit']);
        Route::post('/delete', [ItemCategoryController::class, 'delete']);

    });
    Route::group(['prefix' => 'item_brand'], function () {
        Route::resource('/item_brand', ItemBrandController::class);
        Route::get('/getmodal', [ItemBrandController::class, 'modal']);
        Route::post('/submit', [ItemBrandController::class, 'submit']);
        Route::post('/delete', [ItemBrandController::class, 'delete']);

    });
    //
    Route::group(['prefix' => 'item'], function () {
        Route::resource('/item', ItemControll::class);
        Route::get('/item_card', [ItemControll::class, 'transection']);
        Route::post('/create', [ItemControll::class, 'create']);
        Route::post('/update', [ItemControll::class, 'update']);
        Route::post('/delete', [ItemControll::class, 'delete']);
        Route::get('/getImage', [ItemControll::class, 'modalImage']);
        Route::post('/UploadImage', [ItemControll::class, 'UploadImage']);
        Route::post('/DeleteImage', [ItemControll::class, 'DeleteImage']);
        

    });
    Route::group(['prefix' => 'warehouse'], function () {
        Route::resource('/warehouse', WarehouseController::class);
        Route::get('/getmodal', [WarehouseController::class, 'modal']);
        Route::post('/submit', [WarehouseController::class, 'submit']);
        Route::post('/delete', [WarehouseController::class, 'delete']);

    });
    Route::group(['prefix' => 'slide_show'], function () {
        Route::resource('/slide_show', SlideShowController::class);
        Route::get('/getmodal', [SlideShowController::class, 'modal']);
        Route::post('/submit', [SlideShowController::class, 'submit']);
        Route::post('/delete', [SlideShowController::class, 'delete']);
        Route::post('UploadImage', [SlideShowController::class, 'UploadImage']);
        // Route::get('export', [SlideShowController::class, 'exportExcell'])->name('slide_show.export');

    });

    Route::group(['prefix' => 'chat'], function () {
        Route::resource('/', ChatController::class);
        // Route::get('/getmodal', [ChatController::class, 'modal']);
 
        // Route::get('export', [SlideShowController::class, 'exportExcell'])->name('slide_show.export');

    });


    // Global System Route 
    Route::group(['prefix' => 'system'], function () {
        Route::get('/search/{goup}', [SystemController::class, 'LiveSearch']);
        Route::get('/search_table/{page}', [SystemController::class, 'SearchTable']);
        Route::post('/doLogin', [SystemController::class, 'doLogin']);
        Route::post('/logout', [SystemController::class, 'DoLogout']);
        Route::get('/export/{table}', [SystemController::class, 'ExportExcell'])->name('system.export');
        Route::get('/import_modal/{table}', [SystemController::class, 'ModalImportExcell'])->name('modal.import');
        Route::post('/import/{table}', [SystemController::class, 'ImportExcell'])->name('system.import');
        Route::get('/process_telegram', [SystemController::class, 'DoSendSumaryTelegramBot']);
    });

});
// End Admin Routes
