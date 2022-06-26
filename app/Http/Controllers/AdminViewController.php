<?php

namespace App\Http\Controllers;

use App\Models\Link;
use App\Models\Logo;
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
    public function logo()
    {
        return Inertia::render('Admin/Logo',[
            'logos'=>Logo::all()
        ]);
    }
    public function link()
    {
        return Inertia::render('Admin/Link',[
            'logos'=>Logo::all(),
            'links'=>Link::with('logo')->get()
        ]);
    }
}
