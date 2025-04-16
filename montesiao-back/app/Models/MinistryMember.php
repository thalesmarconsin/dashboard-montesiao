<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MinistryMember extends Model
{
    use HasFactory;

    protected $table = 'ministry_member';

    protected $fillable = [
        'ministry_id',
        'member_id',
    ];

    public function ministry()
    {
        return $this->belongsTo(\App\Models\Ministry::class, 'ministry_id');
    }

    public function member()
    {
        return $this->belongsTo(\App\Models\Member::class, 'member_id');
    }
}