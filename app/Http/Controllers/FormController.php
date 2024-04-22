<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;
use Illuminate\Http\Request;

class FormController extends Controller
{
   public function submitForm(Request $request)
   {
   //  dd($request);
     $validatedData = $request->validate([
 'firstname'=>'required|string',
 'lastname'=>'required|string',
 'email'=>'required|email',
 'contact'=>'required|String',
 'message'=>'required|string'
    ]);
    Mail::to('hinamateen2004@gmail.com')->send(new ContactFormMail($validatedData));
      return response()->json(['message' =>'Form submitted']);
   }
}
