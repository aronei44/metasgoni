<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductLink;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminActionProductController extends Controller
{
    public function createProduct(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'description'=>'required',
            'file'=>'required|file|mimes:png,jpg,gif,heic',
            'links'=>'required|array',
            'links.*.name'=>'required',
            'links.*.url'=>'required'
        ]);
        try {
            $img = $request->file->store('','google');
            $url = Storage::disk('google')->url($img);
            $product = Product::create([
                'name'=>$request->name,
                'description'=>$request->description,
                'url'=>$url,
                'filename'=>$img
            ]);
            foreach($request->links as $link){
                try {
                    ProductLink::create([
                        'name'=>$link['name'],
                        'url'=>$link['url'],
                        'product_id'=>$product->id
                    ]);
                } catch (\Throwable $th) {
                    //throw $th;
                }
            }
            return redirect()->back()->with('success', 'Product Created');
        } catch (\Throwable $th) {
            return redirect()->back()->with('server', $th->getMessage());
        }
    }
    public function createLinkProduct(Request $request, Product $product)
    {
        try {
            ProductLink::create([
                'name'=>$request->name,
                'url'=>$request->url,
                'product_id'=>$product->id
            ]);
            return redirect()->back()->with('success', 'Link Created');
        } catch (\Throwable $th) {
            return redirect()->back()->with('server', $th->getMessage());
        }
    }
    public function updateInfoProduct(Request $request, Product $product)
    {
        try {
            $product->update([
                'name'=>$request->name,
                'description'=>$request->description
            ]);
            return redirect()->back()->with('success', 'Product Updated');
        } catch (\Throwable $th) {
            return redirect()->back()->with('server', $th->getMessage());
        }
    }
    public function updatePhotoProduct(Request $request, Product $product)
    {
        try {
            Storage::disk('google')->delete($product->filename);
            $img = $request->photo->store('','google');
            $url = Storage::disk('google')->url($img);
            $product->update([
                'filename'=>$img,
                'url'=>$url
            ]);
            return redirect()->back()->with('success', 'Product Updated');
        } catch (\Throwable $th) {
            return redirect()->back()->with('server', $th->getMessage());
        }
    }
    public function updateLinkProduct(Request $request, ProductLink $productLink)
    {
        try {
            $productLink->update([
                'name'=>$request->name,
                'url'=>$request->url
            ]);
            return redirect()->back()->with('success', 'Link Updated');
        } catch (\Throwable $th) {
            return redirect()->back()->with('server', $th->getMessage());
        }
    }
    public function deleteLinkProduct(ProductLink $productLink)
    {
        try {
            $productLink->delete();
            return redirect()->back()->with('success', 'Link Deleted');
        } catch (\Throwable $th) {
            return redirect()->back()->with('server', $th->getMessage());
        }
    }
    public function deleteProduct(Product $product)
    {
        try{
            foreach($product->links as $link)
            {
                $link->delete();
            }
            Storage::disk('google')->delete($product->filename);
            $product->delete();
            return redirect()->back()->with('success', 'Product Deleted');
        } catch (\Throwable $th) {
            return redirect()->back()->with('server', $th->getMessage());
        }
    }
}
