<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('item_picture', function (Blueprint $table) {
            $table->id();
            $table->text('code')->nullable();
            $table->text('type')->nullable();
            $table->text('picture_ori')->nullable();
            $table->text('picture_32bit')->nullable();
            $table->text('picture_128bit')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('item_picture');
    }
};
