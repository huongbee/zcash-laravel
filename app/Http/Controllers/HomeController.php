<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class HomeController extends Controller
{
	function cUrl($url){
		try{
			$json = file_get_contents($url);
        	return json_decode($json, true);	
		}
		catch(\Exception $e){
			return $e->getMessage();
		}
		/*$client = new Client();
        $res = $client->request('GET', $url);
		return $res->getBody();*/
	}


    function getListAddress(){
        return $this->cUrl('http://localhost:3001/listaddress');
    }

    function getTotalBalance(){
    	return $this->cUrl('http://localhost:3001/gettotalbalance');
    }



    function getBalance(Request $req){
    	$taddr = $req->taddr ?? 't1aZFMAHWiVTXoUcfkffSCbnmm4HzuuCAEA'; //t1aZFMAHWiVTXoUcfkffSCbnmm4HzuuCAEA
    	return $this->cUrl('http://localhost:3001/getbalance/'.$taddr);
    }
    function getNewAddress(){
    	return $this->cUrl('http://localhost:3001/newaddress');	
    }

    /*function getValidateAddress(Request $req){
    	return $this->cUrl('http://localhost:3001/validateaddress/'.$req->zaddr);		
    }*/

    function listReceivedByAddress(Request $req){
    	return $this->cUrl('http://localhost:3001/listreceivedbyaddress/'.$req->zaddr);	
    }

    function sendMany(Request $req){
    	$from = $req->from ?? '';
    	$to = $req->to ?? '';
    	$amounts = $req->amounts ?? '';
    	return $this->cUrl("http://localhost:3001/sendmany/$from/$to/$amounts");	
    }
}

