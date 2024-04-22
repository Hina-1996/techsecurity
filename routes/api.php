<?php
use App\Http\Controllers\FormController;

Route::post('submitform', [FormController::class, 'submitForm']);