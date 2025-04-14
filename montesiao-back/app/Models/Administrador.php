<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Administrador extends Model
{
    use HasFactory;
     protected $table = 'administradores';
     protected $fillable = [
        'nome',
        'sobrenome',
        'email',
        'senha',
        // Agrega aquí otras columnas que desees permitir
    ];

     public function ministerios()
    {
        return $this->belongsToMany('App/Models/Administrador') ;
    }
}
