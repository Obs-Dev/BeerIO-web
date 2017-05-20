<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Favorite extends Model
{

  protected $fillable = [
      'item_id', 'type'
  ];

  public function user()
  {
      return $this->belongsTo('App\Models\User');
  }
}
