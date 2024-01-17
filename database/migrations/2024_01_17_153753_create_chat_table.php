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
        Schema::create('chat', function (Blueprint $table) {
            $table->id();
            $table->text('type')->nullable();
            $table->text('picture_ori')->nullable();
            $table->text('picture_32bit')->nullable();
            $table->text('from_user')->nullable();
            $table->text('to_user')->nullable();
            $table->text('message')->nullable();
            $table->text('inactived')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chat');
    }
};
