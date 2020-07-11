<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use FlyingLuscas\Correios\Client;
use FlyingLuscas\Correios\Service;

//require 'vendor/autoload.php';

class CorreiosController extends Controller
{
    public function store(Request $request)
    {
      
        $ceporigem   = $request->input('ceporigem');
        $cepdestino  = $request->input('cepdestino');
        $servico     = $request->input('servico');
        $largura     = $request->input('largura');
        $altura      = $request->input('altura');
        $comprimento = $request->input('comprimento');
        $peso        = $request->input('peso');
        $quantidade  = $request->input('quantidade');

        $correios = new Client;

        return $correios->freight()
        ->origin($ceporigem)
        ->destination($cepdestino)
        ->services(Service::SEDEX, Service::PAC)
        ->item($largura, $altura, $comprimento, $peso, $quantidade) // largura, altura, comprimento, peso e quantidade
        ->calculate();
        }
}
