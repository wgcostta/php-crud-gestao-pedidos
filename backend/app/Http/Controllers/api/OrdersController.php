<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Orders;
use Illuminate\Support\Facades\DB;

class OrdersController extends Controller
{

   
    public function index()
    {
        
        $orders =  DB::table('orders')
        ->join('products', 'orders.id_product', '=', 'products.id')
        ->select('orders.*', 'products.nome', 'products.peso', 'products.comprimento', 'products.altura', 'products.largura')
        ->limit(1)
        ->first(1);
        return Orders::$orders;
    
    }

    public function store(Request $request)
    {
        return Orders::create($request->all());
    }

    public function show($id)
    {
        
        return  DB::table('orders')
        ->join('products', 'orders.id_product', '=', 'products.id')
        ->select('orders.*', 'products.nome', 'products.peso', 'products.comprimento', 'products.altura', 'products.largura')
        ->where('orders.id', '=', $id)
        ->get();
    }

    public function update(Request $request, $id)
    {
        $orders = Orders::findOrFail($id);
        $orders->update($request->all());
    }

    public function destroy($id)
    {
        $orders = Orders::findOrFail($id);
        $orders->delete();
    }
}
