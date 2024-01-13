<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SlideShowModel extends Model
{
    protected $table = 'slide_show';
    protected $primaryKey = 'id';
    public $incrementing = true;
    use HasFactory;
}
