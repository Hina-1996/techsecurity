@component('mail::message')
# New Contact Form Submission

**firstname:** {{ $data['firstname'] }}

**lastname:** {{ $data['lastname'] }}

**email:**
{{ $data['email'] }}
**contact:**
{{ $data['contact'] }}
**message:**
{{ $data['message'] }}
Thanks,<br>
{{ config('app.name') }}
@endcomponent
