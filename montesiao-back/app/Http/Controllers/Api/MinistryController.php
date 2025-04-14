<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ministry;
use Illuminate\Support\Facades\Validator;

class MinistryController extends Controller
{
    public function index()
    {
        $ministries = Ministry::all();
        return response()->json(['ministerios' => $ministries], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required|max:255',
            'horario' => 'nullable|max:255',
            'data_inicio' => 'required|date',
            'data_fim' => 'required|date',
            'tipo' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'mensagem' => 'Erro na validação',
                'erros' => $validator->errors(),
                'status' => 400
            ], 400);
        }

        $ministry = Ministry::create($request->all());

        return response()->json([
            'mensagem' => 'Ministério criado com sucesso',
            'ministerio' => $ministry,
            'status' => 201
        ], 201);
    }

    public function show($id)
    {
        $ministry = Ministry::find($id);

        if (!$ministry) {
            return response()->json([
                'mensagem' => 'Ministério não encontrado',
                'status' => 404
            ], 404);
        }

        return response()->json(['ministerio' => $ministry], 200);
    }

    public function update(Request $request, $id)
    {
        $ministry = Ministry::find($id);

        if (!$ministry) {
            return response()->json([
                'mensagem' => 'Ministério não encontrado',
                'status' => 404
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'nome' => 'required|max:255',
            'horario' => 'nullable|max:255',
            'data_inicio' => 'required|date',
            'data_fim' => 'required|date',
            'tipo' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'mensagem' => 'Erro na validação',
                'erros' => $validator->errors(),
                'status' => 400
            ], 400);
        }

        $ministry->update($request->all());

        return response()->json([
            'mensagem' => 'Ministério atualizado com sucesso',
            'ministerio' => $ministry,
            'status' => 200
        ], 200);
    }

    public function destroy($id)
    {
        $ministry = Ministry::find($id);

        if (!$ministry) {
            return response()->json([
                'mensagem' => 'Ministério não encontrado',
                'status' => 404
            ], 404);
        }

        $ministry->delete();

        return response()->json([
            'mensagem' => 'Ministério excluído com sucesso',
            'status' => 200
        ], 200);
    }
}
