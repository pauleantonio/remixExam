<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\User;
use Tymon\JWTAuth\Exceptions\JWTException;


class UserController extends Controller
{
    public function register(Request $request){
        $validated = Validator::make($request->json()->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:5', 
        ]);

        if($validated->fails()){
            return response()->json($validated->errors()->toJson(),400);
        }

        $user=User::create([
            'name'=>$request->json()->get('name'),
            'email'=>$request->json()->get('email'),
            'password'=>Hash::make($request->json()->get('password'))
        ]);
    
            
        return response()->json(compact('user'),201);
    }
 
    public function login(Request $request){
        $credentials=$request->json()->all();
        try{
            if(!$token = JWTAuth::attempt($credentials)){
                return response()->json(['error'=>'Invalid Credentials'],400);
            }
        }
        catch(JWTException $e){
            return response()->json(['error'=>'Could_not_create_token'],500);
        }

        return response()->json(compact('token'));

       
    }

    public function getAuthUser(){
        try{
            if(!$user=JWTAuth::parseToken()->authenticate()){
                return response()->json(['user_not_found'],404);
            }
        }
        catch(Tymon\JWTAuth\Exceptions\TokenExpiredException $e){
            return response()->json(['token_error'],$e->getStatusCode());
        }

        
        
        return response()->json(compact('user'));
    }

  
    
  
  
}
