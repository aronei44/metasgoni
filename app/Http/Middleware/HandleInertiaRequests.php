<?php

namespace App\Http\Middleware;

use App\Models\Link;
use Inertia\Middleware;
use Illuminate\Http\Request;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'photos'=> [
                [
                    'src'=>'https://images.unsplash.com/photo-1654964150054-2686fe33c993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
                    'title'=>'Photo 1',
                    'description'=>'This is a photo 1'
                ],
                [
                    'src'=>'https://images.unsplash.com/photo-1652114067335-a0f7d8f9eeff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
                    'title'=>'Photo 2',
                    'description'=>'This is a photo 2'
                ],
                [
                    'src'=>'https://images.unsplash.com/photo-1654757261706-dba230bdb467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
                    'title'=>'Photo 3',
                    'description'=>'This is a photo 3'
                ],
                [
                    'src'=>'https://images.unsplash.com/photo-1654483143648-cb97703e2979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80',
                    'title'=>'Photo 4',
                    'description'=>'This is a photo 4'
                ]
            ],
            'link'=>[
                'shopee'=>"https://shopee.co.id",
                'lazada'=>"https://www.lazada.co.id",
                'blibli'=>"https://www.blibli.com",
                'tokopedia'=>"https://www.tokopedia.com",
            ],
            'user'=> auth()->user(),
            'success' => fn () => $request->session()->get('success'),
            'server' => fn () => $request->session()->get('server'),
            'links'=>Link::with('logo')->get(),
        ]);
    }
}
