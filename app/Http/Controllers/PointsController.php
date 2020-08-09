<?php

namespace App\Http\Controllers;

use App\Points;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class PointsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Points::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
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
            'lat' => 'required|numeric',
            'lng' => 'required|numeric'
        ]);

        if($validated->fails()){
            return response()->json($validated->errors()->toJson(),400);
        }
        
        $data=Points::create([
            'name'=>$request->json()->get('name'),
            'lat'=>$request->json()->get('lat'),
            'lng'=>$request->json()->get('lng')
        ]);

        return response()->json(compact('data'),201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Points  $points
     * @return \Illuminate\Http\Response
     */
    public function show(Points $points)
    {
        return Points::find($points);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Points  $points
     * @return \Illuminate\Http\Response
     */
    public function edit(Points $points)
    {
        return Points::findorFail($points->id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Points  $points
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Points $points)
    {
        $validated = Validator::make($request->json()->all(), [
            'name' => 'required|string|min:3',
            'lat' => 'required|numeric',
            'lng' => 'required|numeric'
        ]);

        if($validated->fails()){
            return response()->json($validated->errors()->toJson(),400);
        }

        $data=Points::find($points->id);
        $data->name=$request->input('name');
        $data->lat=$request->input('lat');
        $data->lng=$request->input('lng');
        $data->save();
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Points  $points
     * @return \Illuminate\Http\Response
     */
    public function destroy(Points $points)
    {
        return Points::destroy($points->id);
    }
}
