<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    use HasFactory;
     protected $fillable = [
        'titulo',
        'horario',
        'data_inicio',
        'data_fim',
        'local',
        'tipo',
        'imagem_url'
    ];

}
