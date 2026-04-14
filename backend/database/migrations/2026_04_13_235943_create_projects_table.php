<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
   public function up(): void
{
    Schema::create('projects', function (Blueprint $table) {
        $table->id();
        $table->string('title'); // Título do projeto
        $table->text('description'); // Descrição
        $table->string('image')->nullable(); // Nome do arquivo da imagem
        $table->json('tags'); // Tags como ["React", "PHP"]
        $table->timestamps();
    });
}

    
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
