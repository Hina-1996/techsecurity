<template>
    <div class="overflow-hidden">
       <div class="bg-barriers bg-cover w-[100vw] h-[70vh] bg-center">
      <div class="bg-black w-[100vw] h-[70vh] bg-opacity-70">
        <div class="flex flex-col items-center justify-center w-[100vw] h-[70vh]">
            <div class="w-[50vw] text-center">
            <h3 class="text-reddish font-bold">Our Products</h3>
             <h1 class="bold text-white xl:text-[50px] sm:text-lg lg:text-[40px] ">Barriers, Turnstiles and Bollard</h1>
           <h4 class="text-white sm:pt-[2px] lg:pt-2">
                Barriers restrict access, turnstiles regulate pedestrian flow, and bollards control vehicular entry.</h4>
        </div>
      </div></div>
    </div>
    <div class="set">
         <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
            <h2 class="text-reddish">Barriers, Turnstiles and Bollard</h2>
            <p>
Our company specializes in supplying top-quality security solutions, including barriers, turnstiles, and bollards. These products are meticulously designed to meet diverse security needs, whether it's controlling access to restricted areas, managing pedestrian flow in busy spaces, or safeguarding against vehicle intrusion. Our barriers are robust and versatile, ensuring effective control and protection, while our turnstiles offer seamless passage management with reliability.</p>
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