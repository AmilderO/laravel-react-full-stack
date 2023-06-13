<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vuelo extends Model
{
    use HasFactory;

    protected $fillable = [
        "fecha_vuelo",
        "hora_salida",
        "hora_llegada",
        "duracion_trayecto",
        "tipo_trayecto",
        "costo_vuelo"
    ];

}
