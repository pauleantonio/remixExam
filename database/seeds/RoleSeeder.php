<?php

use App\Roles;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Roles::create([
        'role'=>'admin'

        ]);
        Roles::create([
            'role'=>'user'
            ]);
    }
}
