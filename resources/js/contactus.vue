<template>
<div class="set bg-gray-100">
<h3 class="text-reddish">Contact Us</h3>
<div class="lg:grid grid-cols-2">
    <div>
<h2 class="font-bold">Get in touch for more information</h2>
<p>Get in touch with our team of security experts today and let us know your requirements. We'll customize our assistance to perfectly match your unique needs.</p>
<button class="btnstyle" @click='$router.push("/Contact")'>Contact Us</button>
</div>
</div>
</div>
</template>
<script>
export default{
    name:"contactus"
}
</script>