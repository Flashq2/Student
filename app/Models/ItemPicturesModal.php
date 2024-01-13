<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemPicturesModal extends Model
{
    protected $table = 'item_picture';
    protected $primaryKey = 'id';
    public $incrementing = true;
    use HasFactory;
}
