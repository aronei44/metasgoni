<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ViewController extends Controller
{
    public function index()
    {
        return Inertia::render('Index');
    }
    public function profile()
    {
        return Inertia::render('Profile');
    }
    public function product()
    {
        return Inertia::render('Product');
    }
    public function contact()
    {
        return Inertia::render('Contact');
    }
    public function login()
    {
        return Inertia::render('Login');
    }
}
