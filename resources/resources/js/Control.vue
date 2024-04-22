<template>
    <div class="overflow-hidden">
       <div class="bg-control bg-cover w-[100vw] h-[70vh] bg-center">
      <div class="bg-black w-[100vw] h-[70vh] bg-opacity-80">
        <div class="flex flex-col items-center justify-center w-[100vw] h-[70vh]">
            <div class="w-[50vw] text-center">
            <h3 class="text-reddish font-bold">Our Products</h3>
             <h1 class="bold text-white xl:text-[50px] sm:text-lg lg:text-[40px] ">Access Control System</h1>
           <h4 class="text-white sm:pt-[2px] lg:pt-2">
   
Access control systems regulate entry to buildings or areas, typically using keycards, biometric scanners, or PIN codes, enhancing security by restricting unauthorized access.</h4>
        </div>
      </div></div>
    </div>
    <div class="bg-gray-100 set">
         <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
            <h2 class="text-reddish">Access Control System</h2>
            <p>Our company's access control system is a robust security solution tailored to your business needs. We offer a range of authentication methods, including keycards, biometric scanners, and PIN codes, ensuring flexible access management. With seamless integration capabilities, our system provides comprehensive monitoring and control over entry to designated areas. Administrators have precise control over access permissions, enhancing security and efficiency. Trust our expertise to safeguard your premises with our advanced access control solutions.</p>
            </div> <img src="../assets/images/control.jpg"/>
        </div>
    </div>
    <section class="flex-col mx-auto justify-center items-center w-[50vw] text-center">
        <h2 class="text-reddish">Vehicle Access Control System</h2>
        <p>Our company offers a comprehensive Vehicle Access Control System designed to streamline entry and enhance security for various premises. Our products include RFID-based access control solutions, license plate recognition systems, barrier gates, and automatic vehicle identification technology. With customizable access permissions and real-time monitoring features, our systems provide efficient and secure management of vehicular traffic. Integrated with user-friendly software, our solutions offer seamless integration with existing infrastructure for easy deployment. Trust our expertise to deliver reliable and scalable vehicle access control solutions tailored to your specific requirements.</p>
        <!--  <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                <h2>CCTV Camera For Home:</h2>
                <P>
    Our CCTV camera service for home offers comprehensive surveillance solutions tailored to your specific security needs. We provide a range of high-quality cameras equipped with advanced features such as high-definition resolution, night vision capabilities, and motion detection technology. Our professional team ensures seamless installation, optimizing camera placement for maximum coverage and effectiveness. With remote viewing options via smartphone apps, you can monitor your home in real-time from anywhere, providing peace of mind even when you're away. Additionally, we offer cloud storage solutions for convenient access to recorded footage and 24/7 customer support to address any queries or concerns promptly. Trust our expertise to safeguard your home and loved ones with our reliable CCTV camera service.</P>
            </div>
            <div>
                <h2>CCTV Camera For Business:</h2>
                <P>Our CCTV camera service for businesses provides tailored security solutions with high-quality cameras featuring advanced features like HD resolution and night vision capabilities. We conduct thorough site assessments for optimal camera placement, integrating seamlessly with existing security infrastructure. Remote viewing options via secure web or mobile applications enable real-time monitoring from anywhere, enhancing proactive threat response. We specialize in data storage solutions, including cloud-based options, ensuring convenient access to recorded footage. Backed by 24/7 customer support, we offer prompt assistance for any security concerns or technical issues. Trust our expertise to protect your business assets and premises with reliable CCTV surveillance tailored to your needs.</P>
            </div>
        </div> -->
    </section>
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