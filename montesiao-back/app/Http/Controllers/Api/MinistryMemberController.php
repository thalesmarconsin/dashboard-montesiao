<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\MinistryMember;

class MinistryMemberController extends Controller
{
    public function show($id)
    {
        $data = DB::table('ministries as m')
            ->leftJoin('ministry_member as mm', function ($join) use ($id) {
                $join->on('m.id', '=', 'mm.ministry_id')
                     ->where('mm.member_id', '=', $id);
            })
            ->select(
                'm.id',
                'm.nome',
                'm.horario',
                'm.tipo',
                'm.data_inicio',
                'm.data_fim',
                DB::raw("CASE WHEN mm.id > 0 THEN 'S' ELSE 'N' END AS checkbox")
            )
            ->distinct()
            ->get();

        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            '*.id' => 'required',
        ]);

        // Remove as relações antigas
        MinistryMember::where('member_id', $id)->delete();

        // Cria novas relações
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
