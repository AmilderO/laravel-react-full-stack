<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\VueloResource;
use App\Models\Vuelo;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VueloController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return VueloResource::collection(
            Vuelo::query()->orderBy('id', 'asc')->paginate(10)
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validated();
        $vuelo = Vuelo::create($data);
        return response(new VueloResource($vuelo), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Vuelo $vuelo)
    {
        return new VueloResource($vuelo);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Vuelo $vuelo)
    {
        $data = $request->validated();
        $vuelo->update($data);

        return new VueloResource($vuelo);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vuelo $vuelo)
    {
        $vuelo->delete();
        return response("", 204);
    }
}
