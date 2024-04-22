<template>
    <div class="overflow-hidden">
        <div class="bg-cctv bg-cover w-[100vw] sm:h-[56vh] lg:h-[70vh] bg-center">
  <div class="bg-black w-[100vw] sm:h-[56vh] lg:h-[70vh] bg-opacity-80">
    <div class="flex flex-col items-center justify-center w-[100vw] sm:h-[56vh] lg:h-[70vh]">
        <div class="lg:w-[50vw] sm:w-[90%] text-center">
            <!-- <h3 class="text-reddish font-bold">Our Products</h3> -->
            <h1 class="bold text-white xl:text-[50px] sm:text-lg lg:text-[40px] ">Parking Solutions</h1>
            <h4 class="text-white sm:pt-[2px] lg:pt-2">
                Parking solutions streamline parking management using cutting-edge technologies like sensors, payment systems, and live availability tracking.</h4>
        </div>
      </div></div>
    </div>
    <div class=" set">
         <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
            <h2 class="text-reddish">Parking Solutions</h2>
            <p>We present an inventive parking solution that combines smart parking sensors, mobile applications, and cloud-based management software. Our product enables drivers to effortlessly locate vacant parking spots in real-time, alleviating congestion and elevating user satisfaction. Seamlessly integrating with current infrastructure, our system provides extensive analytics for effective parking management. Moreover, we offer adaptable solutions customized for different settings such as commercial lots, municipal areas, and residential complexes. Count on our proficiency to streamline parking operations and enhance productivity through our all-encompassing parking solutions.</p>
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