<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TableFieldModel extends Model
{
    protected $table = 'table_field';
    protected $primaryKey = 'id';
    public $incrementing = true;
    use HasFactory;
}
