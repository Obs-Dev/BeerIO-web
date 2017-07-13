<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Comment extends Model
{

  protected $fillable = [
      'item_id', 'description'
  ];

  public function user()
  {
      return $this->belongsTo('App\Models\User');
  }
}
