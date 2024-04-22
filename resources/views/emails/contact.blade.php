@component('mail::message')
# New Contact Form Submission

**firstname:** {{ $validatedData['firstname'] }}

**lastname:** {{ $validatedData['lastname'] }}

**email:** {{ $validatedData['email'] }}

**contact:** {{ $validatedData['contact'] }}

**message:** {{ $validatedData['message'] }}

Thanks,<br>
{{ config('app.name') }}
@endcomponen