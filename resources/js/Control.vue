<template>
    <div class="overflow-hidden">
        <div class="bg-control bg-cover w-[100vw] sm:h-[56vh] lg:h-[70vh] bg-center">
  <div class="bg-black w-[100vw] sm:h-[56vh] lg:h-[70vh] bg-opacity-80">
    <div class="flex flex-col items-center justify-center w-[100vw] sm:h-[56vh] lg:h-[70vh]">
        <div class="lg:w-[50vw] sm:w-[90%] text-center">
            <!-- <h3 class="text-reddish font-bold">Our Products</h3> -->
            <h1 class="bold text-white xl:text-[50px] sm:text-lg lg:text-[40px] ">Access Control System</h1>
            <h4 class="text-white sm:pt-[2px] lg:pt-2">
                Access control systems bolster security by managing entry using keycards, biometrics, or PINs, thus restricting unauthorized access to buildings or specific areas.</h4>
        </div>
      </div></div>
    </div>
    <div class="set">
        <div class="grid lg:grid-cols-2 gap-8">
            <div>
            <h2 class="text-reddish">Access Control System</h2>
            <p>Our access control system is a sturdy security solution designed to meet your business requirements. We provide various authentication methods such as keycards, biometric scanners, and PIN codes, offering adaptable access management. Our system seamlessly integrates with your existing setup, offering extensive monitoring and control over access to specific areas. Administrators can finely tune access permissions, boosting both security and operational efficiency. Rely on our expertise to protect your premises with our cutting-edge access control solutions.</p>
            </div> <img src="../assets/images/control.jpg" data-aos="fade-left"
    data-aos-duration="2000"/>
        </div>
    </div>
    <div class="set">
        <div class="grid sm:grid-cols-reverse lg:grid-cols-2 gap-8 ">
            <img src="../assets/images/vehicleaccess.jpg" class="w-[100%] "/>
            <div>
                <h2 class="text-reddish">Vehicle Access Control System</h2>
                <p>Our company provides an all-encompassing Vehicle Access Control System aimed at simplifying entry processes and bolstering security across diverse premises. Our product range encompasses RFID-based access control solutions, license plate recognition systems, barrier gates, and automatic vehicle identification technology. Featuring customizable access permissions and real-time monitoring capabilities, our systems ensure efficient and secure management of vehicular traffic. Integrated with user-friendly software, our solutions seamlessly merge with existing infrastructure, facilitating hassle-free deployment. Count on our expertise to deliver dependable and adaptable vehicle access control solutions tailored precisely to your needs.</p>
            </div> 
        </div>
    </div>
    <!-- <section class="flex-col mx-auto justify-center items-center w-[50vw] text-center">
        <h2 class="text-reddish">Vehicle Access Control System</h2>
        <p>Our company provides an all-encompassing Vehicle Access Control System aimed at simplifying entry processes and bolstering security across diverse premises. Our product range encompasses RFID-based access control solutions, license plate recognition systems, barrier gates, and automatic vehicle identification technology. Featuring customizable access permissions and real-time monitoring capabilities, our systems ensure efficient and secure management of vehicular traffic. Integrated with user-friendly software, our solutions seamlessly merge with existing infrastructure, facilitating hassle-free deployment. Count on our expertise to deliver dependable and adaptable vehicle access control solutions tailored precisely to your needs.</p>
    </section> -->
    </div>
    <contactus/>
    </template>
    <script>
    import contactus from "./contactus.vue";
    export default{
        name:"Control",
        components:{
            contactus
        }
       
    }</script>