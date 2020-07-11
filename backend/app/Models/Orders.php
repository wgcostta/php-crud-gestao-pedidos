<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    protected $table='orders';

    protected $fillable = [
        'id_product', 'ceporigem', 'cepdestino','quantidade'
    ];

}
