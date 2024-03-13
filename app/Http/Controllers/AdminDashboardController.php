<?php

namespace App\Http\Controllers;

use App\Jobs\SendTelegramTouser;
use App\Models\User;
use Illuminate\Http\Request;

class AdminDashboardController extends Controller
{
    public function index(){
        $user = User::all();
        for ($i = 0 ; $i < 10 ;$i++){
            dispatch(new SendTelegramTouser($user));
        }
        return view('admin.dashboard');
    }
}
