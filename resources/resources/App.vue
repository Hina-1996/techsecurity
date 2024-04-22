<template>
  <div class="relative">
    <Navbar/>
    <router-view/>
   <Footer/>
  </div>
</template>
<script>
import HomeBode from '../resources/js/HomeBode.vue'
import Navbar from '../resources/js/Navbar.vue'
import Footer from '../resources/js/Footer.vue'
// import router from "./components/routes";
export default{
  name:"App",
  components:{
    Navbar,
    HomeBode,
    Footer
  }
}
</script>