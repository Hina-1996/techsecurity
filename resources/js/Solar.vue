<template>
    <div class="overflow-hidden">
        <div class="bg-solar bg-cover w-[100vw] sm:h-[56vh] lg:h-[70vh] bg-center">
  <div class="bg-black w-[100vw] sm:h-[56vh] lg:h-[70vh] bg-opacity-80">
    <div class="flex flex-col items-center justify-center w-[100vw] sm:h-[56vh] lg:h-[70vh]">
        <div class="lg:w-[50vw] sm:w-[80%] text-center">
            <!-- <h3 class="text-reddish font-bold">Our Products</h3> -->
             <h1 class="bold text-white xl:text-[50px] sm:text-lg lg:text-[40px] ">Solar System</h1>
           <h4 class="text-white sm:pt-[2px] lg:pt-2">Solar systems utilize sunlight to produce electricity via photovoltaic panels, providing sustainable energy solutions.</h4>
        </div>
      </div></div>
    </div>
    <div class="set">
         <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
            <h2 class="text-reddish">Solar System</h2>
            <p>Our company excels in delivering comprehensive solar energy solutions, featuring a variety of products designed to meet a wide range of needs. Our offerings include top-of-the-line solar panels, inverters, mounting systems, and energy storage solutions. We prioritize excellence in quality and reliability, guaranteeing that our solar systems deliver peak performance and long-lasting durability. With customizable designs and expert installation services, we empower both businesses and homeowners to seamlessly transition to clean and sustainable energy sources. Rely on our expertise to provide innovative solar solutions that optimize energy savings and environmental advantages.</p>
            </div> <img src="../assets/images/solar.avif"/>
        </div>
    </div>
    </div>
    <contactus/>
    </template>
    <script>
    import contactus from './contactus.vue'
    export default{
        name:"Solar",
        components:{
            contactus
        }
    }</script>