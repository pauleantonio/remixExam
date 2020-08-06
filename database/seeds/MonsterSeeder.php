<?php

use Illuminate\Database\Seeder;
use App\Monster
class MonsterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Monster::create([
            'name'
        ]);
    }
}
