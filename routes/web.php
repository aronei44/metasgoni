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
Route::get('/login', [ViewController::class,'login'])->name('login')->middleware('guest');
Route::post('/login', [LogController::class,'login']);


Route::group(['prefix'=>'admin','middleware'=>'auth'], function(){
    Route::get('/', [AdminViewController::class,'index']);
    Route::get('/merchant-logos', [AdminViewController::class,'logo']);
    Route::post('/merchant-logos', [AdminActionLogoController::class,'createLogo']);
    Route::put('/merchant-logos/{logo}', [AdminActionLogoController::class,'updateLogo']);
    Route::delete('/merchant-logos/{logo}', [AdminActionLogoController::class,'deleteLogo']);
});
