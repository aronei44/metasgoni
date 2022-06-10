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
}
