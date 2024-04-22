<template>
  <div class="relative overflow-hidden">
    <Navbar/>
    <router-view/>
   <Footer/>
  </div>
</template>
<script>
import AOS from "aos"
import HomeBode from '../resources/js/HomeBode.vue'
import Navbar from '../resources/js/Navbar.vue'
import Footer from '../resources/js/Footer.vue'
import VLazyImage from "v-lazy-image";
// import router from "./components/routes";
export default{
  name:"App",
  components:{
    Navbar,
    HomeBode,
    Footer,
    VLazyImage,
  },
  mounted() {
        AOS.init();
    },
}
</script>
