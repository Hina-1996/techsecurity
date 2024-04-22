<template>
    <div class="overflow-hidden">
       <div class="bg-carpark bg-cover w-[100vw] h-[70vh] bg-center">
      <div class="bg-black w-[100vw] h-[70vh] bg-opacity-80">
        <div class="flex flex-col items-center justify-center w-[100vw] h-[70vh]">
            <div class="w-[50vw] text-center">
            <h3 class="text-reddish font-bold">Our Products</h3>
             <h1 class="bold text-white xl:text-[50px] sm:text-lg lg:text-[40px] ">Parking Solutions</h1>
           <h4 class="text-white sm:pt-[2px] lg:pt-2">
Parking solutions optimize parking management through advanced technologies such as sensors, payment systems, and real-time availability tracking.</h4>
        </div>
      </div></div>
    </div>
    <div class=" set">
         <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
            <h2 class="text-reddish">Parking Solutions</h2>
            <p>Our company offers an innovative parking solution comprising smart parking sensors, mobile apps, and cloud-based management software. With our product, drivers can easily find available parking spaces in real-time, reducing congestion and enhancing user experience. Our system integrates seamlessly with existing infrastructure and offers robust analytics for efficient parking management. Additionally, we provide customizable solutions tailored to various environments, including commercial lots, municipalities, and residential complexes. Trust our expertise to optimize parking operations and improve efficiency with our comprehensive parking solutions.</p>
            </div> <img src="../assets/images/car.jpg"/>
        </div>
    </div>
    </div>
    <contactus/>
    </template>
    <script>
    import contactus from './contactus.vue'
    export default{
        name:"Parking",
        components:{
            contactus
        }
    }</script>