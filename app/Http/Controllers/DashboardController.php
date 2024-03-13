<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\MainSystem\system;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Log;

class DashboardController extends Controller
{
    protected $system ;
    public function __construct()
    {
        $this->system = new system();
    }
    public function index()
    {
        $user = new User();
        $user->email = 'pokputhea2@gmail.com'  ;
        $user->password = bcrypt('123456789');
        $user->name = 'Pok Puthea' ;
        $user->save();
        return view('user.dashboard');
    }

    /**
     * Show the form for creating a new resource.
     */
 
//     public function test(Request $request)
// {
//     try {
//         // Replace 'Your exception message', 'Your page', 'Your line number' with actual values
//         $exceptionMessage = 'Mk rean absent veyyyy';
//         $page = 'home/dashboardcr';
//         $lineNumber = 'ot dg';

//         $this->system->telegram($exceptionMessage, $page, $lineNumber);
//     } catch (Exception $ex) {
//         // Log the exception
//         Log::error('Exception occurred: ' . $ex->getMessage());

//         // Return a JSON response with the error details
//         return response()->json(['status' => 'error', 'msg' => 'An unexpected error occurred.']);
//     }
// }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
