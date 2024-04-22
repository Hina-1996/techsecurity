<template>
    <div class="overflow-hidden">
       <div class="bg-solar bg-cover w-[100vw] h-[70vh] bg-center">
      <div class="bg-black w-[100vw] h-[70vh] bg-opacity-70">
        <div class="flex flex-col items-center justify-center w-[100vw] h-[70vh]">
            <div class="w-[50vw] text-center">
            <h3 class="text-reddish font-bold">Our Products</h3>
             <h1 class="bold text-white xl:text-[50px] sm:text-lg lg:text-[40px] ">Solar System</h1>
           <h4 class="text-white sm:pt-[2px] lg:pt-2">
Solar systems harness sunlight to generate electricity through photovoltaic panels, offering sustainable energy solutions.</h4>
        </div>
      </div></div>
    </div>
    <div class="set">
         <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
            <h2 class="text-reddish">Solar System</h2>
            <p>Our company specializes in providing comprehensive solar energy solutions, offering a range of products tailored to meet diverse needs. Our product lineup includes high-efficiency solar panels, inverters, mounting systems, and energy storage solutions. We prioritize quality and reliability, ensuring our solar systems deliver optimal performance and durability. With customizable designs and professional installation services, we empower businesses and homeowners to transition to clean and sustainable energy sources seamlessly. Trust our expertise to deliver cutting-edge solar solutions that maximize energy savings and environmental benefits.</p>
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