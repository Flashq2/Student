<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemGroupModel extends Model
{
    protected $table = 'item_group';
    protected $primaryKey = 'id';
    public $incrementing = true;
    use HasFactory;
}
