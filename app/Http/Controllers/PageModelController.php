<?php

namespace App\Http\Controllers;

use App\Models\PageModel;
use Illuminate\Http\Request;

class PageModelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    public function getDerectory($path){
        $subDir = [];
        $directories = array_filter(glob($path), 'is_dir');
        foreach ($directories as $directory) {
            array_push($subDir,$directory);
            if($this->getSubDirectories($directory.'/*')) {
                array_push($subDir, $this->getSubDirectories($directory.'/*'));
            }
        }
        
        $finalArrays = array_flatten($path);
        return $finalArrays;
    }
}
