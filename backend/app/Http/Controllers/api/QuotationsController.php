<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Quotations;

class QuotationsController extends Controller
{
    private $objProduct;
    private $objQuotations;
    public function __construct(){
        $this->objProduct = new Product();
        $this->objQuotations = new Quotations;
    }
    
    public function index()
    {
        return Quotations::all();
    }

    public function store(Request $request)
    {
        return Quotations::create($request->all());
    }

    public function show($id)
    {
        return Quotations::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $quotations = Quotations::findOrFail($id);
        $quotations->update($request->all());
    }

    public function destroy($id)
    {
        $quotations = Quotations::findOrFail($id);
        $quotations->delete();
    }
}
