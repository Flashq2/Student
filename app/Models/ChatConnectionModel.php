<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChatConnectionModel extends Model
{
    protected $table = 'chat_connection';
    protected $primaryKey = 'id';
    public $incrementing = false;
    use HasFactory;
}
