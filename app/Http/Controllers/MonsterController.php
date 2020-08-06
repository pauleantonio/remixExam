<?php

namespace App\Http\Controllers;

use App\Monster;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class MonsterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    { 
       
        return response()->json(Monster::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
  
        
  
        $validated = Validator::make($request->json()->all(), [
            'name' => 'required|string|min:3',
        ]);

        if($validated->fails()){
            return response()->json($validated->errors()->toJson(),400);
        }
        
        $data=Monster::create([
            'name'=>$request->json()->get('name'),
        ]);

        return response()->json(compact('data'),201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Monster  $monster
     * @return \Illuminate\Http\Response
     */
    public function show(Monster $monster)
    {
          return Monster::find($monster);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Monster  $monster
     * @return \Illuminate\Http\Response
     */
    public function edit(Monster $monster)
    {
        return Monster::findorFail($monster->id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Monster  $monster
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Monster $monster)
    {
        $validated = Validator::make($request->json()->all(), [
            'name' => 'required|string|min:3',
         
        ]);

        if($validated->fails()){
            return response()->json($validated->errors()->toJson(),401);
        }

        $data=Monster::find($monster->id);
        $data->name=$request->input('name');
        $data->save();
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Monster  $monster
     * @return \Illuminate\Http\Response
     */
    public function destroy(Monster $monster)
    {
        return Monster::destroy($monster->id);
    }
}
