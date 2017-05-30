<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Models\Comment;
use App\Models\User;
use App\Models\ItemEvent;
use Auth;
class ApiItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
          $client = new Client();
          $res = $client->request('GET', 'http://api.brewerydb.com/v2/search?key=a0bb8538647c35dd04265d8dad139194&q=test', []);
          return $res->getBody();
          //return response()->json($res->getBody());
        }catch(Exception $ex){
          return "there was an error";
        }

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
    public function show($id, $type)
    {
      $key = env('BEER_API_KEY', '');
      try{
        $client = new Client();
        $res = $client->request('GET', 'http://api.brewerydb.com/v2/'.$type.'/'.$id.'?key='.$key, []);
        return $res->getBody();
        //return response()->json($res->getBody());
      }catch(Exception $ex){
        return "there was an error";
      }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showComments($id)
    {
      $comment = Comment::with('user')->where('item_id', $id);
      return response()->json(['data' => $comment->orderBy('created_at', 'desc')->get()], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function addComment(Request $request)
    {
      if (!Auth::check())
      {
          return response()->json(['error' => 'Unauthorized. Must be logged in to do that action!'], 401);
      }
      $itemId = $request->input('itemId');
      $description = $request->input('description');
      $comment = new Comment(['item_id' => $itemId, 'description' => $description]);

      $user = User::find(Auth::user()->id);
      $eventMetaData = array('message' => "commented on ".$itemId, 'item_id' => $itemId, 'comment' => $description, 'timestamp' => time());
      $event = new ItemEvent(['item_id' => $itemId, 'meta_data' => json_encode($eventMetaData), 'action' => 'COMMENT']);

      //save the comment and the event.
      $user->comments()->save($comment);
      $user->itemEvents()->save($event);
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
        //
    }

}
