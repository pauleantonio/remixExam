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

Route::group([

    'middleware' => 'api',
    'prefix' => 'point'

], function ($router) {

    Route::get('/', 'PointsController@index');
    Route::get('/item/{point}', 'PointsController@show');
    Route::get('/item/{point}/edit', 'PointsController@edit');
    Route::post('create', 'PointsController@store');
    Route::post('delete/{point}', 'PointsController@destroy');
    Route::put('update/{point}', 'PointsController@update');

});


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
