<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vuelo>
 */
class VueloFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fecha_vuelo' => fake()->date(),
            'hora_salida' => fake()->time(),
            'hora_llegada' => fake()->time(),
            'duracion_trayecto' => fake()->time(),
            'tipo_trayecto' => fake()->word(),
            'costo_vuelo' => fake()->randomFloat(2, 0, 99
            ),
        ];
    }
}
