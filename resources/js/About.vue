<template>
  <div class="overflow-hidden">
    <div class="bg-servicesnew bg-cover w-[100vw] sm:h-[56vh] lg:h-[70vh] bg-center">
  <div class="bg-black w-[100vw] sm:h-[56vh] lg:h-[70vh] bg-opacity-80">
    <div class="flex flex-col items-center justify-center w-[100vw] sm:h-[56vh] lg:h-[70vh]">
        <div class="lg:w-[50vw] sm:w-[80%] text-center ">
            <!-- <h3 class="text-reddish font-bold">Our Services</h3> -->
            <h1 class="bold text-white tracking-wide text-center leading-tight"> Industrial Automation and Equipment Services</h1>
            <!-- <h4 class="text-white">
              CCTV footage captures visual recordings of events and activities in a monitored area, providing crucial
              evidence for security and surveillance purposes.</h4> -->
          </div>
        </div>
      </div>
    </div>
    <div class="set">
      <div class="grid  gap-8">
        <div>
          <h2 class="text-reddish">Industrial Automation and Equipment Services</h2>
          <p>In the dynamic landscape of modern industry, efficiency and precision are paramount. That's where our
            industrial automation and equipment services come into play, offering comprehensive solutions to streamline
            your operations, enhance productivity, and drive profitability.</p>
        </div>
        <!-- <img src="../assets/images/cctvfootage.jpg"/> -->
      </div>
    <div class="">
      <h3>Comprehensive Automation Solutions</h3>
      <p>At Technology Bench Securities, we offer a wide range of industrial automation and equipment services tailored
        to meet the unique needs of your business. Whether you're in manufacturing, warehousing, logistics, or any other
        industry, our expert team will work closely with you to develop customized automation solutions that optimize
        your processes and maximize your efficiency.</p>
      <p class="font-bold">Our Services Include:</p>
      <ul>
        <li>
          <h3 >Automation System Design and Integration:</h3>
          <p>From conceptualization to implementation, we design and integrate automation systems that seamlessly
            integrate with your existing infrastructure and workflows, ensuring smooth operation and minimal disruption.
          </p>
        </li>
        <li>
          <h3>Robotics Integration: </h3>
          <p>Harness the power of robotics to automate repetitive tasks, increase throughput, and improve overall
            efficiency. Our robotics integration services encompass everything from selecting the right robotic solution
            to programming, installation, and ongoing support.</p>
        </li>
        <li>
          <h3>PLC Programming: </h3>
          <p>Our experienced programmers develop customized Programmable Logic Controller (PLC) solutions to control and
            monitor your industrial equipment and processes, providing real-time data insights and actionable
            intelligence.</p>
        </li>
        <li>
          <h3>SCADA Systems:</h3>
          <p> Gain real-time visibility into your operations and make informed decisions with our Supervisory Control
            and Data Acquisition (SCADA) systems. Monitor and control your industrial processes from anywhere, at any
            time, with intuitive SCADA interfaces.</p>
        </li>
        <li>
          <h3 >Industrial Equipment Maintenance and Repair:</h3>
          <p>Keep your equipment running smoothly and minimize downtime with our industrial equipment maintenance and
            repair services. Our team of skilled technicians provides proactive maintenance, troubleshooting, and repair
            services to ensure the reliability and longevity of your equipment.</p>
        </li>
      </ul>
    </div>
  </div>
  </div>
  <contactus />
</template>
<script>
import contactus from './contactus.vue';
export default {
  name: "About",
  components: {
    contactus
  }
}
</script>