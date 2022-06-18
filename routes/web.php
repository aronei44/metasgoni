<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [ViewController::class, 'index'])->name('index');
Route::get('/profiles', [ViewController::class, 'profile'])->name('profile');
Route::get('/products', [ViewController::class, 'product'])->name('product');
Route::get('/contact', [ViewController::class, 'contact'])->name('contact');
