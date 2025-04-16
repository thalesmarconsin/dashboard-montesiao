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
        'ministerio_id',
    ];
   
    public function ministries()
    {
        return $this->belongsToMany(\App\Models\Ministry::class, 'ministry_member', 'member_id', 'ministry_id');
    }
}


