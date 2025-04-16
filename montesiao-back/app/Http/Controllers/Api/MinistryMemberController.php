<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MinistryMember;
use App\Models\Ministry;

class MinistryMemberController extends Controller
{
    public function show($id)
    {
        $ministryMembers = MinistryMember::with('ministry')  
            ->where('member_id', $id)
            ->get()
            ->map(function ($ministryMember) {

                return [
                    'id' => $ministryMember->ministry->id,
                    'nome' => $ministryMember->ministry->nome,
                    'horario' => $ministryMember->ministry->horario,
                    'tipo' => $ministryMember->ministry->tipo,
                    'data_inicio' => $ministryMember->ministry->data_inicio,
                    'data_fim' => $ministryMember->ministry->data_fim,
                    'checkbox' => 'S' 
                ];
            });

        return response()->json($ministryMembers, 200);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            '*.id' => 'required|exists:ministries,id',  
        ]);

        MinistryMember::where('member_id', $id)->delete();

        $ministryMembersCriados = [];
        foreach ($request->all() as $ministryData) {
            $ministryMember = MinistryMember::create([
                'ministry_id' => $ministryData['id'],
                'member_id' => $id,
            ]);
            $ministryMembersCriados[] = $ministryMember;
        }

        return response()->json([
            'mensagem' => 'Relações MinistryMember atualizadas com sucesso',
            'status' => 200,
            'ministryMembers' => $ministryMembersCriados,
        ], 200);
    }
}
