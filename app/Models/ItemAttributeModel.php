<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemAttributeModel extends Model
{
    protected $table = 'item_attribute';
    protected $primaryKey = 'code';
    public $incrementing = false;
    use HasFactory;
}
