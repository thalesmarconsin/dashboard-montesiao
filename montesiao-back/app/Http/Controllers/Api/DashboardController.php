<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function topCursos()
    {

        $data = DB::table('courses as c')
        ->join('course_student as cs', 'c.id', '=', 'cs.course_id')
        ->selectRaw('COUNT(*) AS total, c.nombre')
        ->groupBy('c.nombre')
        ->orderByDesc('total')
        ->limit(3)
        ->get();   

        return response()->json($data, 200);
    }

    public function topEstudiantes()
    {

       $data = DB::table('students as s')
    ->join('course_student as cs', 's.id', '=', 'cs.student_id')
    ->selectRaw('COUNT(*) AS total, s.nombre')
    ->groupBy('s.nombre')
    ->orderByDesc('total')
    ->limit(3)
    ->get();

        return response()->json($data, 200);
    }
}
