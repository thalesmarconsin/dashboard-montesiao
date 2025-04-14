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
}
