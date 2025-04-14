<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ministry extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'horario',
        'data_inicio',
        'data_fim',
        'tipo',
    ];

    public function membros()
    {
        return $this->belongsToMany('App/Models/Member') ;
    }

}
