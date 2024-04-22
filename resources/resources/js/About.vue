<template>
 <div class="overflow-hidden">
       <div class="bg-control bg-cover w-[100vw] h-[70vh] bg-center">
      <div class=" w-[100vw] h-[70vh] ">
        <div class="flex flex-col items-center justify-center w-[100vw] h-[70vh]">
            <!-- <div class="w-[50vw] text-center">
            <h3 class="text-reddish font-bold">Our Products</h3>
             <h1 class="bold text-white xl:text-[50px] sm:text-lg lg:text-[40px] ">Access Control System</h1>
           <h4 class="text-white sm:pt-[2px] lg:pt-2">
   
Access control systems regulate entry to buildings or areas, typically using keycards, biometric scanners, or PIN codes, enhancing security by restricting unauthorized access.</h4>
        </div> -->
      </div></div>
    </div>
    <div class="set text-center w-[60%] mx-auto">
       <h2 class="text-reddish">About Us</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laboriosam aut saepe ipsum nihil consectetur possimus earum, neque delectus eius aliquid molestias, illo corrupti ipsa asperiores exercitationem dicta error consequuntur voluptatem ipsam magni labore ducimus, at culpa. Eum ex dolor, earum numquam minima deleniti, aliquam recusandae ea, nobis voluptate praesentium.</p>
    </div>
    <contactus/>
    </div>
</template>
<script>
import contactus from './contactus.vue';
export default{
    name:"About",
    components:{
        contactus
    }
}
</script>