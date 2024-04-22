<template>
<div class="overflow-hidden">
   <div class="bg-cctv bg-cover w-[100vw] sm:h-[56vh] lg:h-[70vh] bg-center">
  <div class="bg-black w-[100vw] sm:h-[56vh] lg:h-[70vh] bg-opacity-80">
    <div class="flex flex-col items-center justify-center w-[100vw] sm:h-[56vh] lg:h-[70vh]">
        <div class="lg:w-[50vw] sm:w-[90%] text-center">
        <!-- <h3 class="text-reddish font-bold">Our Products</h3> -->
         <h1 class="bold text-white xl:text-[50px] sm:text-lg lg:text-[40px] ">CCTV System</h1>
         <h4 class="text-white sm:pt-[2px] lg:pt-2">
            Closed-circuit television (CCTV) footage records visual documentation of events and activities within a monitored vicinity, offering vital evidence for security and surveillance objectives.</h4>
    </div>
  </div></div>
</div>
<div class=" set">
    <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
        <h2 class="text-reddish">CCTV SYSTEM</h2>
        <p >Technology Bench Securities is the premier supplier of electronic security solutions in Islamabad, Pakistan, boasting several years of experience in the safety and security sector. With a strong track record and positive testimonials, we have earned the reputation as the leading provider of CCTV security camera systems with monitors in Pakistan.
        <br>    <br>
        Our commitment to innovation, quality, and service sets us apart. Clients return to us repeatedly for all their security and surveillance needs, recognizing us as the best wireless CCTV system brand in Pakistan. Furthermore, we are dedicated to making surveillance easy and affordable, positioning Technology Bench as a global leader in innovative security solutions.
        <br>    <br>
        Driven by our vision to create a safer world, we offer cutting-edge electronic security solutions. As the foremost CCTV camera service provider in Pakistan, we strive to ensure the safety and security of our clients and communities.</p>
        </div> <img src="../assets/images/cctvfootage.jpg"/>
    </div>
</div>
</div>
<contactus/>
</template>
<script>
import AOS from "aos"
import contactus from "./contactus.vue";
export default{
    name:"Partners",
    components:{
        contactus
    },
    mounted() {
        AOS.init();
        AOS.refresh();
    },
}</script>
<style scoped>
</style>