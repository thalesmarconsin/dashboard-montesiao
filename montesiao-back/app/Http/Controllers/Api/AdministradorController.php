<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\Administrador;
use Illuminate\Support\Facades\Validator;

class AdministradorController extends Controller
{
      public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'nome' => 'required|max:255',
            'sobrenome' => 'required|max:255',
            'email' => 'required',
            'senha' => 'required|min:8',
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Erro para validar os dados',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data, 400);
        }

        $admin =  Administrador::create([
            'nome' => $request->nome,
            'sobrenome' => $request->sobrenome,
            'email' => $request->email,
            'senha' => $request->senha,
        ]);

        if (!$admin) {
            $data = [
                'message' => 'Erro para criar um administrador',
                'status' => 500
            ];
            return response()->json($data, 500);
        }

        $data = [
            'administrador' => $admin,
            'status' => 201
        ];

        return response()->json($admin, 201);

    }

    public function show($email,$senha)
    {
        $admin = Administrador::where('email', $email)
                            ->where('senha', $senha)
                            ->get();

        if (!$admin) {
            $data = [
                'message' => 'Administrador não encontrado',
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        $ministerioArray = [
            'ministerio' => $admin,
            'status' => 200
        ];

        return response()->json($admin, 200);
    }
}
