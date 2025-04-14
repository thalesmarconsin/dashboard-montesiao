<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string('nome')->nullable();
            $table->string('sobrenome');
            $table->string('email')->unique();
            $table->integer('idade');
            $table->string('cpf')->unique();
            $table->string('telefone')->nullable();
            $table->boolean('batizado')->default(false);
            $table->date('data_batismo')->nullable();
            $table->string('ministerio')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
