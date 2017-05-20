<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Auth;
use App\Models\User;
use App\Models\Favorite;
class ApiFavoriteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

      $favorite = Favorite::where('user_id', Auth::user()->id);
      return response()->json(['data' => $favorite->orderBy('created_at', 'desc')->get()], 200);
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

      if (!Auth::check())
      {
          return response()->json(['error' => 'Unauthorized. Must be logged in to do that action!'], 401);
      }
      $itemId = $request->input('itemId');
      $type = $request->input('type');
      $favorite = new Favorite(['item_id' => $itemId, 'type' => $type]);

      $user = User::find(Auth::user()->id);

      $user->favorites()->save($favorite);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      if (!Auth::check())
      {
          return response()->json(['error' => 'Unauthorized. Must be logged in to do that action!'], 401);
      }
      $itemId = $id;

      $favorite = Favorite::where('user_id', Auth::user()->id)
        ->where('item_id',$id);
      return response()->json(['data' => $favorite->get()], 200);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      if (!Auth::check())
      {
          return response()->json(['error' => 'Unauthorized. Must be logged in to do that action!'], 401);
      }
      $itemId = $id;

      $favorite = Favorite::where('user_id', Auth::user()->id)
        ->where('item_id',$id);

      $favorite->delete();
      return response()->json(['favorite' => $favorite], 200);
    }
}
