<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemCategoryModel extends Model
{
    protected $table = 'item_category';
    protected $primaryKey = 'id';
    public $incrementing = true;
    use HasFactory;
}
