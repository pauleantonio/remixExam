<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {

    Route::post('login', 'UserController@login');
    Route::get('profile', 'UserController@getAuthUser');
    Route::post('register', 'UserController@register');


});

Route::group([

    'middleware' => 'api',
    'prefix' => 'monster'

], function ($router) {

    Route::get('/', 'MonsterController@index');
    Route::get('/item/{monster}', 'MonsterController@show');
    Route::get('/item/{monster}/edit', 'MonsterController@edit');
    Route::post('create', 'MonsterController@store');
    Route::post('delete/{monster}', 'MonsterController@destroy');
    Route::put('update/{monster}', 'MonsterController@update');

});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
