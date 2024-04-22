<template>
    <div class="overflow-hidden">
          <div class="py-12 nav set">
          <div class="lg:pt-24 sm:pt-[10%]">
              <h2 class="text-center mb-4">Our Clients</h2>
  </div>
        <div class="grid  sm:grid-cols-3 md:grid-cols-5 place-items-end relative gap-4">
            <div data-aos="flip-down" data-aos-delay="200" data-aos-duration="1000"  class=" w-[70%] mx-auto contain" v-for="Product in Product" :key="Product">
                <div >
                     <v-lazy-image :src="Product.src"  class="w-24 lg:w-36  "/>
                </div>
              
            </div>
        </div>
</div>
<div class="bg-partners bg-cover  text-white tracking-wide leading-loose" >
    <div class="bg-black bg-opacity-70 set ">
<h2 class="text-reddish tracking-wide">Benefits of Partnering with Us</h2>
<p>By partnering with [Your Company Name] for your industrial automation and equipment needs, you'll benefit from:
<ul class=" sm:text-xs lg:text-base tracking-wide">
    <li><i class="fa-solid fa-chevron-right pr-2 "></i>Increased productivity and efficiency</li>
    <li><i class="fa-solid fa-chevron-right pr-2"></i>Improved product quality and consistency</li>
    <li><i class="fa-solid fa-chevron-right pr-2"></i>Reduced operational costs and downtime</li>
    <li><i class="fa-solid fa-chevron-right pr-2"></i>Enhanced workplace safety</li>
    <li><i class="fa-solid fa-chevron-right pr-2"></i>Greater flexibility and scalability to adapt to changing market demands</li>
</ul></p>
<h3 class="text-reddish tracking-wide">Trusted Partner for Your Automation Journey</h3>
<p class="tracking-wide">With years of experience and a proven track record of success, Technology Bench  is your trusted partner for all your industrial automation and equipment needs. From initial consultation and system design to implementation, training, and ongoing support, we'll work tirelessly to ensure that your automation journey is a smooth and successful one.
</p>
<h3 class="text-reddish tracking-wide">Take the Next Step Towards Automation</h3>
<p class="tracking-wide">Ready to take your operations to the next level? Contact us today to schedule a consultation and learn how our industrial automation and equipment services can help you achieve your business objectives. Let's work together to unlock new levels of efficiency, productivity, and profitability for your organization.</p>
</div>
      <div>
</div>

</div>
</div>
    </template>
<script>
import VLazyImage from "v-lazy-image";
import leo from '../assets/images/leo.png'
import long from '../assets/images/longs.png'
import interloop from '../assets/images/interloop.png'
import china from '../assets/images/china.png'
import cggc from '../assets/images/cggc.jpg'
export default{
    name:'Clients',
    components:{
        VLazyImage
    },
    data(){
        return{
            Product:[
            {src:cggc},
        {src:long},
        {src:leo},
        {src:interloop},
        {src:china}
    ]
        }
    }
}</script>