<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use App\Models\UuidModel;

class ItemEvent extends UuidModel
{

  protected $fillable = [
      'item_id', 'action', 'meta_data'
  ];

  public function user()
  {
      return $this->belongsTo('App\Models\User');
  }
}
