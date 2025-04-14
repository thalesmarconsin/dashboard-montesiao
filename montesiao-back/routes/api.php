<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MemberController; 
use App\Http\Controllers\Api\MinistryController; 
use App\Http\Controllers\Api\DashboardController; 
use App\Http\Controllers\Api\AdministradorController;
use App\Http\Controllers\Api\MinistryMemberController; 


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//members
Route::get('/members', [MemberController::class, 'index']);
Route::get('/members/{id}', [MemberController::class, 'show']);
Route::post('/members', [MemberController::class, 'store']);
Route::put('/members/{id}', [MemberController::class, 'update']);
Route::delete('/members/{id}', [MemberController::class, 'destroy']);

//ministries
Route::get('/ministries', [MinistryController::class, 'index']);
Route::get('/ministries/{id}', [MinistryController::class, 'show']);
Route::post('/ministries', [MinistryController::class, 'store']);
Route::put('/ministries/{id}', [MinistryController::class, 'update']);
Route::delete('/ministries/{id}', [MinistryController::class, 'destroy']);


//ministries
Route::get('/ministries-member/{id}', [MinistryMemberController::class, 'show']);
Route::put('/ministries-member/{id}', [MinistryMemberController::class, 'update']);


//administradores
Route::get('/administradores/{email}/{clave}', [AdministradorController::class, 'show']);
Route::post('/administradores', [AdministradorController::class, 'store']);


//dashboard
Route::get('/dashboard/top-cursos', [DashboardController::class, 'topCursos']);
Route::get('/dashboard/top-estudiantes', [DashboardController::class, 'topEstudiantes']);

