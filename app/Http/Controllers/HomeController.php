<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    // public function __invoke()
    // {
    //     return view('home');
    // }
    
    /**
     * Create a new controller instance.
     *
     * @return void
     */


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function show($object){
        if($object != "aviso-legal" && $object != "politica-cookies" && $object != "condiciones-registro" && $object != "politica-privacidad" && $object != "condiciones-servicio"){
            $object = "No_Existe";
        }
        return view('show', compact('object'));
    }

}
