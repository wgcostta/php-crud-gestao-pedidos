<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'nome', 'peso', 'comprimento','altura','largura',
    ];
}
