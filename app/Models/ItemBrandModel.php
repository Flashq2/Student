<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemBrandModel extends Model
{

    protected $table = 'item_brand';
    protected $primaryKey = 'id';
    public $incrementing = true;
    use HasFactory;
}
