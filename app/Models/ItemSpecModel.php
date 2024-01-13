<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemSpecModel extends Model
{
    protected $table = 'item_spectification';
    protected $primaryKey = 'code';
    use HasFactory;
}
