<template>
    <!-- <div class="mt-12"></div> -->
  <div class="relative ">
     
       
   <div class="py-12 bg-gray-900 text-gray-400 nav set">
     <div class="mx-auto ">
       <div class="  justify-between">
         <div class=" my-4 w-full ">
          <h2 class="text-white ">sldis</h2>         
            <p class="text-justify details">
               Creative-powered to fuel your growth goals. We build world-class
                                   digital products, software and branding.
           </p>
         </div>
<div class="grid md:grid-cols-3 lg:grid-cols-6 sm:gap-4 lg:gap-4 tracking-tight">
         <div class="">
           <div>
             <h3 class="inline-block pb-2 mb-4 border-b-4 border-darkgreen text-white cursor-pointer hover:text-darkgreen" @click='$router.push("/")'>Home</h3>
           </div>
         </div>
         <div class="">
           <div>
               <h3 class="inline-block  pb-2 mb-4 border-b-4 border-darkgreen  text-white">About</h3>
           </div>
           <!-- <ul class="leading-8 text-white">
             <li class="sm:text-xs lg:text-sm pb-2 lg:text-md"><a href="#" class="hover:text-darkgreen" type="btn" @click='$router.push("/about/overview")'><i class='fas text-sm text-darkgreen/80 pr-2 pl-2'>&#xf054;</i>Overview</a></li>
             <li class="sm:text-xs lg:text-sm pb-2 lg:text-md"><a href="#" class="hover:text-darkgreen" type="btn" @click='$router.push("/about/exhibits")'><i class='fas text-sm text-darkgreen/80 pr-2 pl-2'>&#xf054;</i>Exhibits</a></li>
             <li class="sm:text-xs lg:text-sm pb-2 lg:text-md"><a href="#" class="hover:text-darkgreen" type="btn" @click='$router.push("/Media")'><i class='fas text-sm text-darkgreen/80 pr-2 pl-2'>&#xf054;</i>Media Section</a></li>
             <li class="sm:text-xs lg:text-sm pb-2 lg:text-md"><a href="#" class="hover:text-darkgreen" type="btn" @click='$router.push("/Conference")'><i class='fas text-sm text-darkgreen/80 pr-2 pl-2'>&#xf054;</i>Conference</a></li>
           </ul> -->
         </div>
         <div >
           <div>
               <h3 class="inline-block  pb-2 mb-4 border-b-4 border-darkgreen text-white">Products</h3>
           </div>
           <ul class="leading-8 text-white">
             <li class="sm:text-xs lg:text-sm pb-2 lg:text-md"><a href="#" class="hover:text-darkgreen" type="btn" @click='$router.push("/Exhibitor/Application")'><i class='fas text-sm text-darkgreen/80 pr-2 pl-2'>&#xf054;</i>CCTV System</a></li>
             <li class="sm:text-xs lg:text-sm pb-2 lg:text-md"><a href="#" class="hover:text-darkgreen" type="btn" @click='$router.push("/Exhibitor/Login")'><i class='fas text-sm text-darkgreen/80 pr-2 pl-2'>&#xf054;</i>Access Control System</a></li>
             <li class="sm:text-xs lg:text-sm pb-2 lg:text-md"><a href="#" class="hover:text-darkgreen" type="btn" @click='$router.push("/Exhibitor/Application")'><i class='fas text-sm text-darkgreen/80 pr-2 pl-2'>&#xf054;</i>Vehicle Access Control System</a></li>
             <li class="sm:text-xs lg:text-sm pb-2 lg:text-md"><a href="#" class="hover:text-darkgreen" type="btn" @click='$router.push("/Exhibitor/Application")'><i class='fas text-sm text-darkgreen/80 pr-2 pl-2'>&#xf054;</i>Solar System</a></li>
             <li class="sm:text-xs lg:text-sm pb-2 lg:text-md"><a href="#" class="hover:text-darkgreen" type="btn" @click='$router.push("/Exhibitor/Application")'><i class='fas text-sm text-darkgreen/80 pr-2 pl-2'>&#xf054;</i>Parking Solutions</a></li>
             <li class="sm:text-xs lg:text-sm pb-2 lg:text-md"><a href="#" class="hover:text-darkgreen" type="btn" @click='$router.push("/Exhibitor/Application")'><i class='fas text-sm text-darkgreen/80 pr-2 pl-2'>&#xf054;</i>Public Address System</a></li>
             <li class="sm:text-xs lg:text-sm pb-2 lg:text-md"><a href="#" class="hover:text-darkgreen" type="btn" @click='$router.push("/Exhibitor/Application")'><i class='fas text-sm text-darkgreen/80 pr-2 pl-2'>&#xf054;</i>Gate Automation</a></li>
             <li class="sm:text-xs lg:text-sm pb-2 lg:text-md"><a href="#" class="hover:text-darkgreen" type="btn" @click='$router.push("/Exhibitor/Application")'><i class='fas text-sm text-darkgreen/80 pr-2 pl-2'>&#xf054;</i>Barriers, Turnstiles and Bollard</a></li>

               </ul>
         </div>
         <div class="">
           <div>
             <h3 class="inline-block pb-2 mb-4 border-b-4 border-darkgreen text-white cursor-pointer hover:text-darkgreen" @click='$router.push("/Contact")'>Contact</h3>
           </div>
         </div>
         <div class="lg:col-span-2">
           <div>
             <h3 class="inline-block  pb-2 mb-4 border-b-4 border-darkgreen text-white">Connect With Us</h3>
           </div> 
           <a href="https://www.linkedin.com/company/3640494" target="blank"><i class="fa-brands fa-linkedin-in foot"></i></a>
                               <a href="https://twitter.com/TkBench" target="blank"> <i class="fa-brands fa-twitter foot"></i></a>
                               <a href="https://www.facebook.com/tkbench" target="blank"><i class="fa-brands fa-facebook-f foot "></i></a>
                               <a href="https://www.youtube.com/channel/UCWQWMqYA6s7CyuiwDHzRjsg" target="blank"><i class="fa-brands fa-youtube foot"></i></a>
         </div>
         
       </div>
       <div class="horizon mt-8"></div>
                   <div
                       class="flex flex-col items-center md:flex-row md:justify-between text-white pt-4 sm:text-xs lg:text-sm">
                       <div>© 2024 Copyrights zsdasdasdsasa. All rights are reserved.</div>
                           </div>
       </div>
     </div>
   </div>

     
  </div>
</template>
<script>
export default {
   name: "Footer",
   methods: {
       goToAboutPage() {
           this.$router.push("/product");
       },
       gotomenu() {
           this.$router.push("/")
       }
   }
}
</script>