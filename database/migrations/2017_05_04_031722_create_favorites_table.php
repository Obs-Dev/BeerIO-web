<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFavoritesTable extends Migration
{
  public function up()
  {
    Schema::create('favorites', function(Blueprint $table)
    {
      $table->increments('id');
      $table->integer('user_id')->unsigned();
      $table->foreign('user_id')
        ->references('id')->on('users');
      $table->string('item_id');
      $table->string('type');
      $table->timestamps();
    });
  }

  public function down()
  {
    Schema::drop('favorites');
  }
}
