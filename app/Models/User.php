<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Zizaco\Entrust\Traits\EntrustUserTrait;
use Illuminate\Auth\Passwords\CanResetPassword;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens,Notifiable;
    use CanResetPassword, EntrustUserTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'api_token','bio','image'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token'
    ];

    public function favorites()
    {
        return $this->hasMany('App\Models\Favorite');
    }

    public function comments()
    {
        return $this->hasMany('App\Models\Comment');
    }

    public function itemEvents()
    {
        return $this->hasMany('App\Models\ItemEvent');
    }
}
