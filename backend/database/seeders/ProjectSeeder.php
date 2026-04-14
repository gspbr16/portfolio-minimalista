<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        Project::create([
            'title' => 'Portfólio Minimalista',
            'description' => 'Desenvolvimento de um portfólio moderno utilizando React, Vite e Tailwind CSS para destacar projetos e habilidades.',
            'image' => 'projetoPortifolio.png',
            'tags' => ['React', 'Vite', 'Tailwind', 'JavaScript']
        ]);

        Project::create([
            'title' => 'Jogo do Número Secreto',
            'description' => 'Jogo de lógica com reconhecimento de voz e manipulação de DOM desenvolvido em JavaScript puro.',
            'image' => 'projetoSecretNumber.png',
            'tags' => ['JavaScript', 'HTML5', 'Web Speech API']
        ]);
    }
}