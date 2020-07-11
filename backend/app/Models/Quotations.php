<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quotations extends Model
{
    protected $table='quotations';

    protected $fillable = [
        'id_orders', 'codigoservico', 'valorfrete','prazoentrega'
    ];

}
