<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/*
* The follow methods should be moved to a special
* No user should have access to add/change permissions and roles
*/
// Route to create a new role
Route::post('role', 'JwtAuthenticateController@createRole');
// Route to create a new permission
Route::post('permission', 'JwtAuthenticateController@createPermission');
// Route to assign role to user
Route::post('assign-role', 'JwtAuthenticateController@assignRole');
// Route to attache permission to a role
Route::post('attach-permission', 'JwtAuthenticateController@attachPermission');

// API route group that we need to protect
Route::group(['prefix' => 'v2', 'middleware' => ['ability:super-user,create-users']], function()
{
    // Protected route
    Route::get('users', 'JwtAuthenticateController@index');
});

// Authentication route
Route::post('authenticate', 'JwtAuthenticateController@authenticate');

Route::group(['prefix' => 'v1'], function()
{
  /**Api Controllers
  */
  Route::resource('beer', 'ApiBeerController');
  Route::resource('search', 'ApiSearchController');
});

// Route::group(['prefix' => 'v2', 'middleware' => ['ability:admin|guardian,na']], function()
// {
//   /**Api Controllers
//   */
//   Route::resource('bus', 'Api\BusController');
//   Route::resource('driver', 'Api\DriverController');
//   Route::resource('ride', 'Api\RideController');
//   Route::resource('rideLocation', 'Api\RideLocationController');
// });
