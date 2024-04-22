<template>
    <div class="overflow-hidden">
        <div class="bg-barriers bg-cover w-[100vw] sm:h-[56vh] lg:h-[70vh] bg-center">
  <div class="bg-black w-[100vw] sm:h-[56vh] lg:h-[70vh] bg-opacity-80">
    <div class="flex flex-col items-center justify-center w-[100vw] sm:h-[56vh] lg:h-[70vh]">
        <div class="lg:w-[53vw] sm:w-[80%] text-center">
            <!-- <h3 class="text-reddish font-bold">Our Products</h3> -->
             <h1 class="bold text-white xl:text-[50px] sm:text-lg lg:text-[40px] ">Barriers, Turnstiles and Bollard</h1>
           <h4 class="text-white sm:pt-[2px] lg:pt-2">
            Barriers limit access, turnstiles manage pedestrian flow, and bollards regulate vehicular entry.</h4>
        </div>
      </div></div>
    </div>
    <div class="set">
         <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            <div >
            <h2 class="text-reddish">Barriers, Turnstiles and Bollard</h2>
            <p>
                Our company is dedicated to providing premium security solutions, offering a range of top-quality products such as barriers, turnstiles, and bollards. These meticulously designed offerings cater to diverse security requirements, whether it involves controlling access to restricted zones, managing pedestrian traffic in bustling areas, or protecting against vehicle intrusion. Our robust and versatile barriers ensure effective control and protection, while our turnstiles provide reliable management of passage with seamless efficiency.</p>
            </div> <img src="../assets/images/barriersb.avif" />
        </div>
    </div>
    </div>
    <contactus/>
    </template>
<script>
import contactus from './contactus.vue';
export default {
name:'Barrier'  ,
components:{
    contactus
}  
}
</script>