<template>
  <header class="fixed stick top-0  left-0 w-full z-10 " id="header">
    <div class="set items-center  flex flex-row justify-between lg:py-0 sm:py-4 sticky">
     <a href="#"><img src="../assets/images/logo.jpg" class="lg:w-auto sm:w-38 sm:h-16 lg:h-24">
      </a>
     <div class="lg:absolute lg:top-4 lg:right-12">
      <Transition name="slide-fade">
        <div 
        class="lg:nav sm:py-12 lg:py-0 hidden absolute top-0 left-0 w-full h-[100vh]border-b lg:block lg:static lg:border-none lg:w-auto md:ml-auto lg:bg-transparent z-20 sm:backdrop-blur-xl bg-white lg:backdrop-blur-0"
          id="nav_menu" ref="nav_menu">
          <ul
            class=" mt-8 flex flex-col text-center md:gap-2 md:flex-col lg:flex-row font-poppin font-medium sm:pr-8 md:pr-12 lg:ml-12 transition-all  "
            ref="nav_link" >
            <div class="absolute right-0 top-6 pr-8 md:pr-12 lg:hidden mt-4" @click="hidemenu">
              <img src="../assets/images/close.png" class="w-6 h-6" id="close_menu">
            </div>
            <div class=" nav__link dropdown text-start lg:text-center lg:pl-[12px] pl-[32px] " @click="hidemenu"><router-link to="/">Home</router-link>
            </div>
            <div class=" nav__link dropdown text-start lg:text-center lg:pl-[12px] pl-[32px]" @click="hidemenu"><router-link to="/Clients">Our Clients</router-link>
            </div>
            <div class=" nav__link dropdown text-start lg:text-center lg:pl-[12px] pl-[32px] "  @click="hidemenu"><router-link to="/About">Services</router-link>
            </div>
            <div class="lg:nav__links relative nav__link dropdown text-start lg:text-center lg:pl-[12px] pl-[32px]">Products
              <div class="dropdown-content">
                <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Partners">CCTV Footage</router-link></a>
                <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Control">Access Control System</router-link></a>
                <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Solar">Solar System</router-link></a>
                <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Parking">Parking</router-link></a>
                <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Gateautomation">Gate Automation</router-link></a>
                <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Address">Public Address System</router-link></a>
                <a href="#" class="navdropmenu " @click="hidemenu"><router-link to="/Barrier">Barriers, Turnstiles and Bollard</router-link></a>
              </div>
            </div>
            <div class="lg:nav__links nav__link dropdown text-start lg:text-center lg:pl-[12px] pl-[32px]" @click="hidemenu"><router-link to="/Contact">Contact</router-link>
            </div>
           
          </ul>
        </div>
      </Transition>
        <div class="flex items-center gap-5 ">
          <div id="show_menu" class="absolute right-0 top-6 pr-8 md:pr-12 lg:hidden mt-4" v-if="menu">
            <img src="../assets/images/menu.png" class="w-6 h-6" @click="menushow">
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

.nav {
  position: relative;
}

/* Apply the hover effect to the .nav__link element */
.nav__link:hover::after {
  width: 100%;
}

/* Set the hover effect for the ::after pseudo-element */
.nav__link::after {
  display: block;
  content: '';
  width: 0%;
  height: 3px;
  background: #F54632;
  position: absolute;
  left: 0;
  top: 46px; /* Adjusted to position the bar just below the .nav__link element */
  transition: 0.5s;
}

/* Ensure the hover effect is only applied to the direct child of .nav */
.nav > .nav__link:hover::after {
  width: 100%;
}

/* Hide the dropdown content by default */
.dropdown-content {
  display: none;
  /* Other styles for dropdown content */
}

/* Show the dropdown content when .dropdown is hovered */
.nav__link:hover .dropdown-content {
  display: block;
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
  background-color: white;
  min-width: 250px;
  font-size: small;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
z-index:-1;
border-radius:10px;
}

.dropdown-content a {
  color: black;
  /* padding: 12px 16px; */
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: hsl(0, 0%, 97%);
  /* background-color:#F54632; */
  color:#F54632;
  width: auto;
  transition: 0.1s;
}

.dropdown:hover .dropdown-content {
  display: block;
}
@media only screen and (max-width: 1024px) {
  .nav {
  position: relative;
}

/* Apply the hover effect to the .nav__link element */
.nav__link:hover::after {
  width: 100%;
}

/* Set the hover effect for the ::after pseudo-element */
.nav__link::after {
  display: block;
  content: '';
  width: 0%;
  height: 3px;
  background: transparent;
  position: absolute;
  left: 0;
  top: 46px; /* Adjusted to position the bar just below the .nav__link element */
  transition: 0.5s;
}

/* Ensure the hover effect is only applied to the direct child of .nav */
.nav > .nav__link:hover::after {
  width: 100%;
}
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
  color: #F54632;
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