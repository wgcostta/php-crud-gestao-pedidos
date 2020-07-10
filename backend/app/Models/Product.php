<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table='products';

    protected $fillable = [
        'nome', 'peso', 'comprimento','altura','largura',
    ];

    public function relQuotations(){
        return $this->hasOne('App\Models\Product','id');
    }
}

