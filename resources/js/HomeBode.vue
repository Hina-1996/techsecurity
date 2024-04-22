<template>
    <div >
        <div class="video-container relative">
    <video src="../assets/images/covervideo.mp4" autoplay muted ></video>
    
</div>
   <!-- <img src="../assets//images/building.jpg" class="h-[80vh] w-[100vw]"> -->
   <div class="set">
    <h4 class="text-reddish text-center ">About Us</h4>
    <h1 
    class="tracking-wide text-center leading-tight">Secure Linx Provides Best Suitable Security Solutions And Automation For Your Sites</h1>
    <p >Technology Bench Securities offers top-notch security solutions and automation services tailored to your site's needs. Based in Islamabad, Pakistan, we specialize in electronic security systems, providing the finest security services and access control solutions for years. We also offer consultancy to ensure the most suitable security solutions for your premises. Our extensive range of products includes CCTV cameras, Vehicle Access Control System, AVI, AVC  System, Fire alarm systems, electric fence systems, gate automation, access control systems, industrial and Building  automation, and more</p>
   
   </div>
   <div class="sm:px-4 lg:px-28  text-center lg:w-[70%] mx-auto">
        <h4  class="text-reddish">Our Services</h4>
        <h2 >WHAT WE PROVIDE</h2>
        <p >Technology Bench Securities excels in delivering premier electronic security solutions and surveillance systems in Pakistan. Whether it's for your business, home, or any other property, we ensure round-the-clock security against all threats. Our state-of-the-art systems enable swift identification of any individual while minimizing costs.</p>
    </div>
    <div class="grid lg:grid-cols-3 relative">
        <div  class="lg:col-span-2">
            <img src="../assets/images/services.jpg" class="w-[100%] h-full rounded-r-lg" data-aos="fade-right"  data-aos-delay="100"
    data-aos-duration="1200"/>
        </div>
        <div data-aos="fade-left"  data-aos-delay="200"
    data-aos-duration="1400" class="col-span-1 lg:ml-[-30%] lg:py-[-10%] lg:my-6">
            <div class="bg-white sm:py-[3%] lg:py-[10%] px-[10%] lg:shadow-2xl lg:shadow-gray-600 rounded-l-2xl sm:mt-[-100px] md:mt-[-250px] lg:mt-0  sm:mb-[0.4%] lg:mb-0">
            <h2>Our Services</h2>
            <p>
                We offer a wide range of services including installation, customization, testing, programming, commissioning, and maintenance. Our skilled team handles everything from the initial setup to personalized customization, ensuring smooth integration and functionality. Thorough testing and precise programming ensure peak performance, while meticulous commissioning ensures alignment with your requirements. Through ongoing maintenance, we uphold reliability and efficiency, offering comprehensive support for your systems from start to finish.</p>
<ul class="sm:text-xs lg:text-base">
    <li ><i class="fa-solid fa-chevron-right pr-2 "></i>Installation</li>
    <li ><i class="fa-solid fa-chevron-right pr-2"></i>Customization</li>
    <li><i class="fa-solid fa-chevron-right pr-2"></i>Testing Programming & Commissioning</li>
    <li ><i class="fa-solid fa-chevron-right pr-2"></i>Maintenance</li>
</ul>
<div class="mt-4 btn_style">
    <i class="fa-solid fa-arrow-right text-xl" @click='$router.push("/About")'></i>
</div>

</div>
        </div>
    </div>
    <div class="bg-reddish/80 set">
        <div class="grid lg:grid-cols-2 gap-12">
            <div class="">
                <h4 class="text-white">Our Products</h4>
                <h2 class="font-bold">Cutting-edge mobile video surveillance cameras are at the forefront of our industry</h2>
                <p>We understand that diverse environments and security needs call for tailored solutions. That's why we've crafted a comprehensive lineup of mobile surveillance units to address every demand.</p>
            </div>
            <div class="grid lg:grid-cols-4 lg:gap-4 sm:grid-cols-2 md:grid-cols-4 sm:gap-2 justify-items-center items-start">
                <div class="setting " v-for="products in productsdata" :key="products" @click="navigateToProduct(products.routelink)">
                <div class="relative flex-col  rounded-full border-gray-100 border-solid border-2 sm:w-20  sm:h-20 lg:h-24 lg:w-24 bg-gray-100 mx-auto">
                    <v-lazy-image :src="products.src" class="absolute top-[13px] left-[14px] lg:h-16 sm:h-12 "/>
                </div>
                <p class=" text-black text-sm text-center">{{ products.heading }}</p>
            </div>
            
            </div>
        </div>
    </div>
    <section>
        <h2 class="text-center">Partners</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 place-items-end relative">
            <div data-aos="flip-down" 
    data-aos-duration="1200" class=" gap-4 mt-12 w-[70%] mx-auto contain" v-for="Product in Product" :key="Product">
                <div class=" border-2 border-white rounded-md justify-center px-4 py-4 shadow-lg shadow-gray-200" >
                    <v-lazy-image :src="Product.src" class="py-4 h-24" />
                    <div class="flex justify-between pt-8">
                        <p class="font-bold py-0 uppercase ">{{Product.name}}</p>
                        <a :href="Product.links" target="blank">
        <i class="fa-solid fa-arrow-right text-xl text-reddish contains"></i>
    </a>
                    </div>
                </div>
              
            </div>

        </div>
    </section>
 <contactus/>
    </div>
</template>
<script>
import VLazyImage from "v-lazy-image";
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
import zk from '../assets/images/zk.png'
import hik from '../assets/images/hik.png'
import Dahua from '../assets/images/dahau.png'
import honey from '../assets/images/honey.png'
import motion from '../assets/images/motion.png'
import atrax from '../assets/images/atrax.png'
import quarter from '../assets/images/quarter.png'
import datalogic from '../assets/images/datalogic.jpg'
import lenze from '../assets/images/lenze.png'
import jlg from '../assets/images/jlg.png'
import alstef from '../assets/images/alstef.png'
import bosch from '../assets/images/bosch.png'
import interroll from '../assets/images/interroll.png'
import AOS from "aos"
export default{
name:"HomeBode",
components:{
    contactus,
    VLazyImage,
},
mounted() {
    AOS.init();
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
        routelink:'/Partners',
        src:cctvpro,
        heading:'CCTV System ',
        },
        {
             routelink:'/Control',
        src:Access,
        heading:'Access Control System',
        },
        {
             routelink:'/Solar',
        src:solar,
        heading:'Solar System',
        },
        {
             routelink:'/Parking',
        src:Parking,
        heading:'Parking Solutions',
        },
        {
             routelink:'/Address',
        src:Public,
        heading:'Public Address System',
        },
        {
             routelink:'/Gateautomation',
        src:Gate,
        heading:'Gate Automation',
        },
        {
             routelink:'/Barrier',
        src:Barriers,
        heading:'Barriers, Turnstiles and Bollard',
        },
    ],
    Product:[
    {
        src:zk,
        name:'zkteco',
        links:'https://www.zkteco.com/'
        },
        {
        src:hik,
        name:'Hikvision ',
        links:'https://www.hikvision.com/en/'
        },
        {
        src:Dahua,
        name:'Dahua ',
        links:'https://www.dahuasecurity.com/'
        },
        {
        src:honey,
        name:'HoneyWell ',
        links:'https://www.honeywell.com/us/en'
        },
        {
        src:motion,
        name:'Motion06',
        links:'https://www.motion06.at/en/'
        },
        {
        src:atrax,
        name:'Atrax Group',
        links:'https://www.atraxgroup.com/'
        },
        {
        src:lenze,
        name:'Lenze ',
        links:'https://www.lenze.com/en-de'
        },
        {
        src:quarter,
        name:'Quarterhill  ',
        links:'https://www.quarterhill.com/'
        },
        {
        src:datalogic,
        name:'Datalogic ',
        links:'https://www.datalogic.com/'
        },
        {
        src:alstef,
        name:'ALSTEF ',
        links:'https://alstefgroup.com/'
        },
        {
        src:jlg,
        name:'JLG  ',
        links:'https://www.jlg.com/en'
        },
        {
        src:interroll,
        name:'Interroll',
        links:'https://www.interroll.com/'
        },
        {
        src:bosch,
        name:'BOSCH  ',
        links:'https://www.boschsecurity.com/xc/en/'
        },
        
    ]
    }
},
methods:{
    navigateToProduct(route) {
    this.$router.push(route);
  }
}
}

</script>
<style scoped>
.video-container {
    width: 100vw;
    height: 85vh;
    overflow: hidden; /* Ensures the video doesn't overflow its container */
}

.video-container video {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the video fills the container */
}

/* [data-aos="new-animation"] {
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    transform: translateX(100px);

    &.aos-animate {
      transform: translateX(20);
    }
  }
} */
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
.setting {
    width: 100%;
    /* height: 80px; */
    transition: ease-in-out 1200s;
    background-repeat: no-repeat;
    background-size: cover;
}

.setting:hover > div img {
    transition: transform 200ms ease-in-out;
    transform:  translateY(2px) scale(1.3);
}
.contain:hover >div .contains{
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    transform: translateX(3px) scale(1.1);
    /* hover:translate-x-2 transition duration-700 ease-in-out hover:cursor-pointer  */
}

</style>