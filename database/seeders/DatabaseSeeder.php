<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create([
            'name'=>'Superadmin',
            'email'=>'admin@metasgoni.com',
            'password'=>\Hash::make('123123123'),
            'role'=>'superadmin'
        ]);
    }
}
