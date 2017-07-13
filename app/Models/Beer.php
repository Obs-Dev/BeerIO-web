<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Beer extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'api_token'
    ];
}
