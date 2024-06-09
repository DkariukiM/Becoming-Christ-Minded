<?php

use App\Http\Controllers\PagesController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});


//to blogs page
Route::get('/blogs', [PagesController::class, 'blog'])->name('blogs');
//to contact page
Route::get('/contact-us', [PagesController::class, 'contact'])->name('contact');
