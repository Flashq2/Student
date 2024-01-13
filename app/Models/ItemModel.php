<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemModel extends Model
{
    protected $table = 'items';
    protected $primaryKey = 'id';
    public $incrementing = true;
    use HasFactory;
}
