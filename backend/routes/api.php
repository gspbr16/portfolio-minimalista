<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ExperienceController;

Route::get('/projects', [ProjectController::class, 'index']);

Route::get('/experiences', [ExperienceController::class, 'index']);