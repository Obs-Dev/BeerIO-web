<?php

/**
 * This is a great UUID generator package available on Composer
 * but you can generate your UUID however you see fit.
 */
namespace App\Models;
use Ramsey\Uuid\Uuid;
use Illuminate\Database\Eloquent\Model;
class UuidModel extends Model
{
    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        /**
         * Attach to the 'creating' Model Event to provide a UUID
         * for the `id` field (provided by $model->getKeyName())
         */
        static::creating(function ($model) {
            $model->{$model->getKeyName()} = (string)$model->generateNewId();
        });
    }

    /**
     * Get a new version 4 (random) UUID.
     *
     * @return \Ramsey\Uuid\Uuid
     */
    public function generateNewId()
    {
        return Uuid::uuid4();
    }
}
