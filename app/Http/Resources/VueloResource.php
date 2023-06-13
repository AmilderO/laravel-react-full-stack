<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VueloResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'fecha_vuelo' => $this->fecha_vuelo,
            'hora_salida' => $this->hora_salida,
            'hora_llegada' => $this->hora_llegada,
            'duracion_trayecto' => $this->duracion_trayecto,
            'tipo_trayecto' => $this->tipo_trayecto,
            'costo_vuelo' => $this->costo_vuelo,
        ];
    }
}
