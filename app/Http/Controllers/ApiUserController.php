<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Models\User;
use Auth;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Validator;

class ApiUserController extends Controller
{
    use ValidatesRequests;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

      if (!Auth::check())
      {
          return response()->json(['error' => 'Unauthorized. Must be logged in to do that action!'], 401);
      }
      $user = User::find(Auth::user()->id);
      return response()->json(['data' => $user], 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {

      $q = $request->input('q');

      $results = User::where('name', 'LIKE', '%'.$q.'%')->orWhere('email', 'LIKE', '%'.$q.'%')->get();
      return response()->json(['data' => $results], 200);


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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      $user = User::find($id);
      return response()->json(['data' => $user], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      if (!Auth::check())
      {
          return response()->json(['error' => 'Unauthorized. Must be logged in to do that action!'], 401);
      }
      if(Auth::user()->id != $id){
        return response()->json(['error' => 'Cant update a profile that isnt yours'], 401);
      }

      $user = User::find(Auth::user()->id);
      $user->bio =  $request->input('bio');
      $user->name =  $request->input('name');

      $user->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
