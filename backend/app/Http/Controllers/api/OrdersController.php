<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrdersController extends Controller
{

   
    public function index()
    {
        return Orders::all();
    }

    public function store(Request $request)
    {
        Orders::create($request->all());
    }

    public function show($id)
    {
        return Orders::findOrFail($id);
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
