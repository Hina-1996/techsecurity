<template>
   <header class="fixed stick top-0  left-0 w-full z-10 " id="header">
  
     <div class="set items-center nav flex flex-row justify-between lg:py-2 sm:py-4 sticky ">
       <a href="#"><img src="../assets/images/logo.jpg" class="lg:w-auto sm:w-38 sm:h-16 lg:h-24">
       </a>
      <div class="">
       <Transition name="slide-fade">
         <div 
           class="py-12 hidden absolute top-0 left-0 w-full h-[100vh]border-b lg:block lg:static lg:border-none lg:py-0 lg:w-auto md:ml-auto lg:bg-transparent z-20 sm:backdrop-blur-xl bg-white lg:backdrop-blur-0"
           id="nav_menu" ref="nav_menu">
           <ul
             class=" mt-8 flex flex-col text-center md:gap-2 md:flex-col lg:flex-row font-poppin font-medium sm:pr-8 md:pr-12 lg:ml-12 transition-all  "
             ref="nav_link" >
             <div class="absolute right-0 top-6 pr-8 md:pr-12 lg:hidden mt-4" @click="hidemenu">
               <img src="../../assets/images/close .png" class="w-6 h-6" id="close_menu">
             </div>
             <div class="nav__link dropdown text-start lg:text-center lg:pl-[12px] pl-[32px] " @click="hidemenu"><router-link to="/">Home</router-link>
             </div>
             <div class="nav__link dropdown text-start lg:text-center lg:pl-[12px] pl-[32px] "><router-link to="/About">About</router-link>
               <!-- <ul class="dropdown-content">
         <a class="navdropmenu"><router-link to="/about/overview" @click="hidemenu">Overview</router-link></a>
         <a class="navdropmenu"><router-link to="/about/exhibits" @click="hidemenu">Exhibits</router-link></a>
         <a class="navdropmenu"><router-link to="/Media" @click="hidemenu">Media Section</router-link></a>
         <a class="navdropmenu"><router-link to="/Conference" @click="hidemenu">Conference</router-link></a>
               </ul> -->
             </div>
             <div class="nav__link dropdown text-start lg:text-center lg:pl-[12px] pl-[32px]">Products
               <div class="dropdown-content ">
                 <!-- <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Exhibitor/Application">Partners</router-link></a> -->
                 <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Partners">CCTV FOOTAGE</router-link></a>
                 <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Control">Access Control System</router-link></a>
                 <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Solar">Solar System</router-link></a>
                 <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Parking">Parking</router-link></a>
                 <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Gateautomation">Gate Automation</router-link></a>
                 <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Address">Public Address System</router-link></a>
                 <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Barrier">Barriers, Turnstiles and Bollard</router-link></a>
               </div>
             </div>
             <!-- <div class="nav__link dropdown text-start lg:text-center lg:pl-[12px] pl-[32px] " @click="hidemenu"><router-link to="/Hostedbuyer">Hosted Buyer Station</router-link>
             </div> -->
             <!-- <div class="nav__link dropdown text-start lg:text-center lg:pl-[12px] pl-[32px]">Visitor
               <div class="dropdown-content ">
                 <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Visiting/guide">Visiting Guide</router-link></a>
                 <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Visiting/Pre-registration">Pre-registration</router-link></a>
                 <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Visiting/floorplan">Floor Plan</router-link></a>
               </div>
             </div> -->
             <div class="nav__link dropdown text-start lg:text-center lg:pl-[12px] pl-[32px]" @click="hidemenu"><router-link to="/Contact">Contact</router-link>
             </div>
           </ul>
         </div>
       </Transition>
         <div class="flex items-center gap-5 ">
           <div id="show_menu" class="absolute right-0 top-6 pr-8 md:pr-12 lg:hidden mt-4" v-if="menu">
             <img src="../../assets/images/menus.png" class="w-6 h-6" @click="menushow">
           </div>
         </div>
       </div>
   </div>
   </header>
 </template>
 <script>
 export default {
   name: "NavBar",
   data() {
     return {
       active: false,
       menu: true,
     }
   },
   methods: {
     handleClick() {
       this.active = !this.active;
     },
     menushow() {
       this.$refs.nav_menu.classList.remove('hidden')
     },
     hidemenu() {
     // Hide the entire menu by adding the 'hidden' class to the menu itself
     this.$refs.nav_menu.classList.add('hidden');
 
     // Get all the nav__link elements inside the menu
     const navLinks = this.$refs.nav_link.querySelectorAll('.nav__link');
 
     // Loop through each nav__link element and add the 'hidden' class
     navLinks.forEach(navLink => {
         navLink.classList.add('hidden');
     });
 }
   },
 };
 </script>
 <style scoped>
 .nav ul li {
   position: relative;
 }
 
 ul li a {
   display: block;
 }
 
 .nav ul li::after {
   display: block;
   content: '';
   width: 0%;
   height: 3px;
   background: #083344;
   position: absolute;
   left: 0;
   bottom: -2px;
   transition: 0.5s;
 }
 
 .nav ul li:hover::after {
   width: 100%;
 }
 
 .showdropmenu {
   display: none;
 }
 
 .hidecontent:hover .showdropmenu {
   display: block;
 }
 
 .dropbtn {
   color: white;
   padding: 16px;
   font-size: 16px;
   border: none;
 }
 
 .dropdown {
   position: sticky;
   font-size: large;
   display: inline-block;
   /* color: #c33764; */
 }
 
 .dropdown-content {
   display: none;
   position: absolute;
   top:40px;
   background-color: #f1f1f1;
   min-width: 160px;
   font-size: small;
   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
 z-index:-1;
 }
 
 .dropdown-content a {
   color: black;
   /* padding: 12px 16px; */
   text-decoration: none;
   display: block;
 }
 
 .dropdown-content a:hover {
   background-color: #ddd;
   width: auto;
 }
 
 .dropdown:hover .dropdown-content {
   display: block;
 }
 @media only screen and (max-width: 1024px) {
   .nav ul li {
   position: relative;
 }
 
 ul li a {
   display: block;
 }
 
 .nav ul li::after {
   display: block;
   content: '';
   width: 0%;
   height: 3px;
   background: #083344;
   position: absolute;
   left: 0;
   bottom: -2px;
   transition: 0.5s;
 }
 
 .nav ul li:hover::after {
   width: 100%;
 }
 
 .showdropmenu {
   display: none;
 }
 
 .hidecontent:hover .showdropmenu {
   display: block;
 }
 
 .dropbtn {
   color: white;
   padding: 16px;
   font-size: 16px;
   border: none;
 }
 
 .dropdown {
   position: sticky;
   font-size: medium;
   display: inline-block;
   color: #32de84;
 }
   .dropdown-content {
     position: relative;
   display: none;
   margin-top: -22px;
   background-color: #f1f1f1;
   /* min-width: 160px; */
   font-size: small;
   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
 z-index:-1;
 }
 .dropdown-content a {
   color: black;
   /* padding: 2px 12px; */
   text-decoration: none;
   display: block;
 }
 
 .dropdown-content a:hover {
   background-color: #ddd;
   width: auto;
 }
 .dropdown:hover .dropdown-content {
   display: block;
 }
 
       }
       /*
   Enter and leave animations can use different
   durations and timing functions.
 */
 .slide-fade-enter-active {
   transition: all 0.3s ease-out;
 }
 
 .slide-fade-leave-active {
   transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
 }
 
 .slide-fade-enter-from,
 .slide-fade-leave-to {
   transform: translateX(20px);
   opacity: 0;
 }
 </style>
  <!-- <div class="flex items-center gap-5 ">
   <div id="show_menu" class="lg:hidden mt-4" v-if="menu">
      <img src="/menus.png" class="w-8 h-8" @click="menushow">
   </div>
    <div v-else @click="menushow" >
                 <img src="close.png"  class="w-8 h-8" id="close_menu">
             </div>
 </div>  -->