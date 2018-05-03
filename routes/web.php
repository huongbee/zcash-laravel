
<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/gettotalbalance', [
    'uses'=>'HomeController@getTotalBalance',
    'as'=>'gettotalbalance'    
]);
Route::get('/getbalance/{taddr?}', [
    'uses'=>'HomeController@getBalance',
    'as'=>'getbalance'    
]);



Route::get('/listaddress', [
    'uses'=>'HomeController@getListAddress',
    'as'=>'listaddress'    
]);
Route::get('/newaddress', [
    'uses'=>'HomeController@getNewAddress',
    'as'=>'newaddress'    
]);
/*Route::get('/validateaddress/{zaddr}', [
    'uses'=>'HomeController@getValidateAddress',
    'as'=>'validateaddress'    
]);*/

Route::get('listreceivedbyaddress/{zaddr}',[
	'uses'=>'HomeController@listReceivedByAddress',
    'as'=>'listreceivedbyaddress' 
]);
Route::get('sendmany/{from}/{to}/{amounts}',[
	'uses'=>'HomeController@sendMany',
    'as'=>'sendmany' 
]);

Route::get('home',function(){
    echo 134;
});