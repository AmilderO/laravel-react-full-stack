<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vuelos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('fecha_vuelo');
            $table->string('hora_salida');
            $table->string('hora_llegada');
            $table->string('duracion_trayecto');
            $table->string('tipo_trayecto');
            $table->string('costo_vuelo');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vuelos');
    }
};
