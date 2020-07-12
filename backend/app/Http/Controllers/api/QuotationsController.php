<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Quotations;
use Illuminate\Support\Facades\DB;

class QuotationsController extends Controller
{

    
    public function index()
    {
       // return Quotations::all();
       return DB::table('quotations')
       ->select('quotations.*',DB::raw('IF(quotations.codigoservico="04510","PAC","SEDEX") AS nomeservico'))
       ->get();
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
