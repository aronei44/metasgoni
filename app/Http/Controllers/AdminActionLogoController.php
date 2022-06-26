<?php

namespace App\Http\Controllers;

use App\Models\Logo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminActionLogoController extends Controller
{
    public function createLogo(Request $request)
    {
        $request->validate([
            'logo'=>'required|file|mimes:png,jpg,gif,heic',
            'name'=>'required'
        ]);
        try {
            $img = $request->logo->store('','google');
            $url = Storage::disk('google')->url($img);
            Logo::create([
                'name'=>$request->name,
                'url'=>$url,
                'filename'=>$img
            ]);
            return redirect()->back()->with('success', 'Logo Created');
        } catch (\Throwable $th) {
            return redirect()->back()->with('server', $th->getMessage());
        }
    }
    public function updateLogo(Request $request, Logo $logo)
    {
        $request->validate([
            'logo'=>'nullable|file|mimes:png,jpg,gif,heic',
            'name'=>'required'
        ]);
        try {
            $url = $logo->url;
            $img = $logo->filename;
            if(isset($request->logo)){
                Storage::disk('google')->delete($img);
                $img = $request->logo->store('','google');
                $url = Storage::disk('google')->url($img);
            }
            $logo->update([
                'name'=>$request->name,
                'url'=>$url,
                'filename'=>$img
            ]);
            return redirect()->back()->with('success', 'Logo Updated');
        } catch (\Throwable $th) {
            return redirect()->back()->with('server', $th->getMessage());
        }
    }
    public function deleteLogo(Logo $logo)
    {
        try {
            Storage::disk('google')->delete($logo->filename);
            $logo->delete();
            return redirect()->back()->with('success', 'Logo Deleted');
        } catch (\Throwable $th) {
            return redirect()->back()->with('server', $th->getMessage());
        }
    }
}
