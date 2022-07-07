<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class LogController extends Controller
{
    public function login(LoginRequest $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $request->session()->regenerate();
            return redirect()->intended('/admin');
        }
        return back()->with(['error'=>'data yang anda masukan salah']);
    }
    public function logOut(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
    public function addUser(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'email'=>'required|email:dns|unique:users',
            'password'=>'required|min:8'
        ]);
        try {
            User::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>\Hash::make($request->password)
            ]);
            return redirect()->back()->with('success', 'User Created');
        } catch (\Throwable $th) {
            return redirect()->back()->with('server', $th->getMessage());
        }
    }
    public function deleteUser(User $user)
    {
        try{
            if($user->role == 'superadmin'){
                return redirect()->back()->with('server', "Superadmin Can't Deleted");
            } else {
                $user->delete();
                return redirect()->back()->with('success', 'User Deleted');
            }
        } catch (\Throwable $th) {
            return redirect()->back()->with('server', $th->getMessage());
        }
    }
}
