<?php

namespace App\Http\Controllers;

use App\Models\Link;
use Illuminate\Http\Request;

class AdminActionLinkController extends Controller
{
    public function createLink(Request $request)
    {
        $request->validate([
            'logo'=>'required|numeric',
            'link'=>'required|starts_with:https'
        ]);
        try {
            Link::create([
                'logo_id'=>$request->logo,
                'link'=>$request->link
            ]);
            return redirect()->back()->with('success', 'Link Created');
        } catch (\Throwable $th) {
            return redirect()->back()->with('server', $th->getMessage());
        }
    }
    public function updateLink(Request $request, Link $link)
    {
        $request->validate([
            'logo'=>'required|numeric',
            'link'=>'required|starts_with:https'
        ]);
        try {
            $link->update([
                'logo_id'=>$request->logo,
                'link'=>$request->link
            ]);
            return redirect()->back()->with('success', 'Link Updated');
        } catch (\Throwable $th) {
            return redirect()->back()->with('server', $th->getMessage());
        }
    }
    public function deleteLink(Link $link)
    {
        try {
            $link->delete();
            return redirect()->back()->with('success', 'Link Deleted');
        } catch (\Throwable $th) {
            return redirect()->back()->with('server', $th->getMessage());
        }
    }
}
