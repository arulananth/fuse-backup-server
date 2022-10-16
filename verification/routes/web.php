<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
use Illuminate\Http\Request;
use Illuminate\Http\Response;
$router->get('/', function () use ($router) {
    return $router->app->version();
});
$router->get('/api/verification', function (Request $request) use ($router) {
	
   if($request->input("a")=="verify")
   { 
    $ip=DB::table("verification")
    ->where("server_ip",$request->input('ip'))->first();
	    if($ip)
	    {
          echo response()->json(['message' => 'Server verification succfully', 'status' => '1'],200); 
	    }
	    else
	    {
          echo response()->json(['message' => 'Server verification failed', 'status' => '0'],422); 
	    } 
	}
   if($request->input("a")=="install")
   { 
    $ip=DB::table("verification")
    ->where("server_ip",$request->input('ip'))->first();
	    if($ip)
	    {
	    	 return['message' => 'Server verification failed', 'status' => '0']; 
	    }
	    else
	    {
	    	DB::table("verification")->insert([
	    		"server_ip"=>$request->input("ip"),
	    		"server_port" =>$request->input("port"),
	    		"server_date"=>date("Y-m-d"),
	    		"server_url" =>$request->input("url"),
	    		"server_email" =>$request->input("email"),
	    		"server_token" => $request->input("token")]);
	    	return ['message' => 'Server verification succfully', 'status' => '1']; 
	    }
	}
});
