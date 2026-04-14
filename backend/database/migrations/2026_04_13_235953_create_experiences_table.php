<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
{
    Schema::create('experiences', function (Blueprint $table) {
        $table->id();
        $table->string('company'); // Nome da empresa
        $table->string('role'); // Seu cargo
        $table->string('period'); // Ex: 2025 — 2026
        $table->text('description'); // O que você fez lá
        $table->json('techs'); // Tecnologias usadas
        $table->timestamps();
    });
}

    
    public function down(): void
    {
        Schema::dropIfExists('experiences');
    }
};
