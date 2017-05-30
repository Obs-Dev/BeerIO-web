<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('item_events', function (Blueprint $table) {
        $table->string('id',36);
        $table->primary('id');
        $table->integer('user_id')->unsigned();
        $table->string('item_id');
        $table->foreign('user_id')->references('id')->on('users');
        $table->longText('meta_data')->nullable();
        $table->string('action');
        $table->timestamps();
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('item_events');
    }
}
