<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Member;
use Illuminate\Support\Facades\Validator;

class MemberController extends Controller
{
    public function index()
    {
        $members = Member::all();

        return response()->json([
            'membros' => $members,
            'status' => 200
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required|max:255',
            'sobrenome' => 'required|max:255',
            'idade' => 'required|integer',
            'cpf' => 'required|unique:members',
            'email' => 'required|email|unique:members',
            'telefone' => 'nullable|string',
            'ministerio_id' => 'nullable|integer|exists:ministries,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'mensagem' => 'Erro na validação dos dados',
                'erros' => $validator->errors(),
                'status' => 400
            ], 400);
        }

        $member = Member::create([
            'nome' => $request->nome,
            'sobrenome' => $request->sobrenome,
            'idade' => $request->idade,
            'cpf' => $request->cpf,
            'email' => $request->email,
            'telefone' => $request->telefone,
            'ministerio_id' => $request->ministerio_id
        ]);

        return response()->json([
            'mensagem' => 'Membro cadastrado com sucesso',
            'membro' => $member,
            'status' => 201
        ], 201);
    }

    public function show($id)
    {
        $member = Member::with('ministerio')->findOrFail($id);

        return response()->json([
            'membro' => $member,
            'status' => 200
        ], 200);
    }


    public function update(Request $request, $id)
    {
        $member = Member::find($id);

        if (!$member) {
            return response()->json([
                'mensagem' => 'Membro não encontrado',
                'status' => 404
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'nome' => 'required|max:255',
            'sobrenome' => 'required|max:255',
            'idade' => 'required|integer',
            'cpf' => 'required|string|size:11|unique:members,cpf,' . $id,
            'email' => 'required|email|unique:members,email,' . $id,
            'telefone' => 'nullable|string',
            'ministerio_id' => 'nullable|integer|exists:ministries,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'mensagem' => 'Erro na validação dos dados',
                'erros' => $validator->errors(),
                'status' => 400
            ], 400);
        }

        $member->update($request->all());

        return response()->json([
            'mensagem' => 'Membro atualizado com sucesso',
            'membro' => $member,
            'status' => 200
        ], 200);
    }

    public function destroy($id)
    {
        $member = Member::find($id);

        if (!$member) {
            return response()->json([
                'mensagem' => 'Membro não encontrado',
                'status' => 404
            ], 404);
        }

        $member->delete();

        return response()->json([
            'mensagem' => 'Membro removido com sucesso',
            'status' => 200
        ], 200);
    }
    
}
