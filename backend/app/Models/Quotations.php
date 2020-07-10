<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quotations extends Model
{
    protected $table='quotations';

    public function relProduct(){
        return $this->hasOne('App\Models\Product','idProduct');
    }
}
