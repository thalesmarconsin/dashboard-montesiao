<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Evento;
use Illuminate\Http\Request;

class EventoController extends Controller
{
    public function index()
    {
        return Evento::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'titulo' => 'required|string|max:255',
            'descricao' => 'nullable|string',
            'horario' => 'nullable|max:255',
            'data_inicio' => 'required|date',
            'data_fim' => 'required|date',
            'local' => 'nullable|string|max:255',
            'tipo' => 'required|string|max:50',
            'imagem' => 'nullable|file|image|max:2048',
            'imagem_url' => 'nullable|string' 
        ]);

        if ($request->hasFile('imagem')) {
            $path = $request->file('imagem')->store('eventos', 'public');
            $validated['imagem_url'] = '/storage/' . $path;
        }

        return Evento::create($validated);
    }

    public function show($id)
    {
        $evento = Evento::find($id);

        if (!$evento) {
            return response()->json([
                'mensagem' => 'Ministério não encontrado',
                'status' => 404
            ], 404);
        }

        return response()->json(['evento' => $evento], 200);
    }

    public function update(Request $request, $id)
    {
        $evento = Evento::findOrFail($id);

        $validated = $request->validate([
            'titulo' => 'sometimes|string|max:255',
            'descricao' => 'nullable|string',
            'horario' => 'nullable|max:255',
            'data_inicio' => 'required|date',
            'data_fim' => 'required|date',
            'local' => 'nullable|string|max:255',
            'tipo' => 'sometimes|string|max:50',
            'imagem' => 'nullable|file|image|max:2048',
            'imagem_url' => 'nullable|string'
        ]);

        if ($request->hasFile('imagem')) {
            $path = $request->file('imagem')->store('eventos', 'public');
            $validated['imagem_url'] = '/storage/' . $path;
        }

        $evento->update($validated);
        return $evento;
    }


    public function destroy($id)
    {
        Evento::destroy($id);
        return response()->noContent();
    }
}
