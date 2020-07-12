<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
use \Illuminate\Http\Response;

class ProductController extends Controller
{

    public function index()
    {
        return Product::all();
    }

    public function store(Request $request)
    {
        return Product::create($request->all());
    }

    public function show($id)
    {
        return Product::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        $product-> update($request->all());
    }

    public function destroy($id)
    {
        $valida = DB::table('products')
        ->select(DB::raw('count(orders.id) as qtdpedidos'))
        ->join('orders', 'orders.id_product', '=', 'products.id')
        ->where('products.id', '=', $id)
        ->get();

        foreach($valida as $temp){
            $var = $temp->qtdpedidos;
        }

        if($var == 0){
            $product = Product::findOrFail($id);
            $product->delete();
            return Product::all();
        }else{
            return  response()->json(['success' => false, 'detail' => (string) 'Produto com pedidos vinculados'], 422);
        }

    }
}
