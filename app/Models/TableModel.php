<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TableModel extends Model
{
    protected $table = 'table';
    use HasFactory;
}
