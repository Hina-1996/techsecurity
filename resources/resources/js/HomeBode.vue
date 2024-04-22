<template>
    <div class="relative">
   <img src="../assets//images/building.jpg" class="h-[80vh] w-[100vw]">
   <section>
    <h4 class="text-reddish text-center">About Us</h4>
    <h1 class="tracking-wide text-center">Secure Linx Provides Best Suitable Security Solutions And Automation For Your Sites</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque accusamus illum eius. Harum odio optio velit soluta laboriosam blanditiis earum, omnis, voluptates, incidunt laudantium sint placeat molestias? Numquam odio, sunt cumque nam animi reiciendis at ducimus aperiam omnis iusto vel amet! Molestiae nesciunt inventore eveniet, optio accusamus eius deleniti perspiciatis corrupti odit quaerat eaque sunt autem laborum soluta aliquam praesentium cumque quibusdam sint ipsum. Ipsam dolorem obcaecati libero sunt consequatur?</p>
   
   </section>
   <div class="text-center w-[50%] mx-auto">
        <h4 class="text-reddish">Our Services</h4>
        <h2>WHAT WE PROVIDE</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem et laudantium a incidunt quisquam quos eaque enim modi quis optio!</p>
    </div>
    <div class="grid grid-cols-3 relative">
        <div class="col-span-2">
            <img src="../assets/images/services.jpg" class="w-full"/>
        </div>
        <div class="col-span-1 ml-[-30%] py-[-10%] my-auto">
            <div class="bg-white py-[10%] px-[10%] shadow-2xl shadow-gray-600 rounded-l-2xl">
            <h2>Our Services</h2>
            <p>
Our comprehensive suite of services encompasses installation, customization, testing, programming, commissioning, and maintenance. From initial setup to tailored customization, our expert team ensures seamless integration and functionality. Rigorous testing and precise programming guarantee optimal performance, complemented by meticulous commissioning to meet your standards. With ongoing maintenance, we ensure sustained reliability and efficiency, providing end-to-end support for your systems.</p>
<ul>
    <li class="hover:text-reddish "><i class="fa-solid fa-chevron-right pr-2 "></i>Installation</li>
    <li class="hover:text-reddish"><i class="fa-solid fa-chevron-right pr-2"></i>Customization</li>
    <li class="hover:text-reddish"><i class="fa-solid fa-chevron-right pr-2"></i>Testing Programming & Commissioning</li>
    <li class="hover:text-reddish"><i class="fa-solid fa-chevron-right pr-2"></i>Maintenance</li>
</ul>
<div class="mt-4 ">
    <i class="fa-solid fa-arrow-right bg-reddish border-[1px] p-4 rounded-full w-12 border-white hover:bg-white hover:border-reddish hover:text-reddish hover:shadow-xl  hover:shadow-reddish"></i>
</div>
</div>
        </div>
    <!-- <div class="w-[400px]" v-for="security in datasecurity" :key="security">
        <h2 class="text-center">{{security.heading}}</h2>
        <img :src="security.src" class="w-[400px]"/>
        <p class="text-center">{{security.details}}</p>
    </div> -->
    </div>
    <div class="bg-reddish/80 set">
        <div class="grid grid-cols-2 gap-12">
            <div class="">
                <h3 class="text-white">Our Products</h3>
                <h2 class="font-bold">Industry Leading Mobile Video Surveillance Cameras</h2>
                <p>Different environments and security challenges demand different solutions. We has developed a complete range of mobile surveillance units to meet all requirements. </p>
            </div>
            <div class="grid grid-cols-4 gap-4">
                <div class=" hover:cursor-pointer" v-for="products in productsdata" :key="products">
                <div class="relative flex-col rounded-full border-gray-100 border-solid border-2 h-24 w-24 bg-gray-100">
              <img :src="products.src" class="absolute top-[13px] left-[14px] h-16 "/>
                </div>
                <p class="text-sm text-black ">{{ products.heading }}</p>
            </div>
            
            </div>
        </div>
    </div>
    <section>
        <h2 class="text-center">Partners</h2>
        <div class="grid grid-cols-4 gap-4 mt-12 w-[70%] mx-auto">
            <img src="./../assets/images/partner.webp"/>
            <img src="./../assets/images/partner.webp"/>
            <img src="./../assets/images/partner.webp"/>
            <img src="./../assets/images/partner.webp"/>
            <img src="./../assets/images/partner.webp"/>
            <img src="./../assets/images/partner.webp"/>
            <img src="./../assets/images/partner.webp"/>
            <img src="./../assets/images/partner.webp"/>
            
        </div>
    </section>
 <contactus/>
    </div>
</template>
<script>
import cctv from '../assets//images/building.jpg'
import cctvpro from '../assets/images/camera.png'
import Access from '../assets/images/access.png'
import solar from '../assets/images/solarpanel.png'
import Parking from '../assets/images/parking.png'
import Public from '../assets/images/public.png'
import Gate from '../assets/images/gate.png'
import contactus from '../js/contactus.vue'
// import Address from '../assets/images/access.png'
import Barriers from '../assets/images/barrier.png'
export default{
name:"HomeBode",
components:{
    contactus,
},
data() {
    return {
        datasecurity:[
            {
            heading:'CCTV ',
            src:cctv,
            details:'CCTV camera installation helps to increase safety at homes. Moreover, the main advantage of monitoring cameras in the home is that you can always watch the activities to keep the environment and culture safe.'
        },
        {
            heading:'CCTV S',
            src:cctv,
            details:'CCTV camera installation helps to increase safety at homes. Moreover, the main advantage of monitoring cameras in the home is that you can always watch the activities to keep the environment and culture safe.'
        },
        {
            heading:'CCTV S',
            src:cctv,
            details:'CCTV camera installation helps to increase safety at homes. Moreover, the main advantage of monitoring cameras in the home is that you can always watch the activities to keep the environment and culture safe.'
        }
    ],
    productsdata:[
    {
        src:cctvpro,
        heading:'CCTV System ',
        },
        {
        src:Access,
        heading:'Access Control System',
        },
        {
        src:solar,
        heading:'Solar System',
        },
        {
        src:Parking,
        heading:'Parking Solutions',
        },
        {
        src:Public,
        heading:'Public Address System',
        },
        {
        src:Gate,
        heading:'Gate Automation',
        },
        {
        src:Barriers,
        heading:'Barriers, Turnstiles and Bollard',
        },
    ]
    }
},
}

</script>
<style scoped>
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
</style>