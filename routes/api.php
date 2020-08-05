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
    Route::post('profile', 'UserController@profile');
    Route::post('register', 'UserController@register');
    Route::post('logout', 'UserController@logout');
    Route::post('refresh', 'UserController@refresh');
    Route::post('me', 'UserController@me');

});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
