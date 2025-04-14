<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'sobrenome',
        'idade',
        'cpf',
        'email',
        'telefone',
        'data_batismo',
        'ministerio_id',
        'batizado',
    ];
   
    public function courses()
    {
        return $this->belongsToMany('App/Models/Course') ;
    }
}


