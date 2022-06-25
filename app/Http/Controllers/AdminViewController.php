<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminViewController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Index',[
            'users'=>count(User::all())
        ]);
    }
}
