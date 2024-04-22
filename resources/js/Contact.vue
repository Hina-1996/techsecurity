<template>
	<div class=" w-full overflow-hidden relative">
          <div class=" items-center justify-center py-12 nav bg-gray-100">
          <div class="lg:pt-24 sm:pt-[10%]">
            <h4 class="font-bold text-black text-center sm:text-[8px] lg:text-sm">Contact Us</h4>
  </div>
  <h2 class="text-center mb-8 sm:text-base">WE ARE HERE TO HELP YOU</h2>
  <div class="grid sm:grid-cols-1 sm:w-[90vw] md:grid-cols-3 lg:w-[80vw] md:w-[80vw] mx-auto gap-4 sm:text-xs lg:text-base">
    <!-- <div class="bg-white px-8 py-4 rounded-lg">
      <div class="bg-blue-50 inline-block rounded-full p-[12px] sm:my-[12px] lg:my-[24px]">
      <img src="../../assets/images/mail.png" class="lg:w-8 sm:w-6"/>
    </div>
      <p class="font-bold">Email Us</p>
      <p>We will response to you as early as possible.</p>
      <p class="font-bold text-blue-700">PITF.tkbench@gmail.com</p>
    </div> -->
    <div class="bg-white px-8 py-4 rounded-lg">
      <div class="bg-gray-100 inline-block rounded-full p-[12px] sm:my-[12px] lg:my-[24px]">
      <img src="../assets/images/email.png" class="lg:w-8 sm:w-6"/>
    </div>
      <p class="font-bold py-0 text-reddish">Email Us</p>
      <p class="py-4">We will response to you as early as possible.</p>
      <p class=" py-0 font-bold ">kkhan@tkbench.com</p>
    </div>
    <div class="bg-white px-8 py-4 rounded-lg">
      <div class="bg-gray-100 inline-block rounded-full p-[12px] sm:my-[12px] lg:my-[24px]">
      <img src="../assets/images/phone.png" class="lg:w-8 sm:w-6"/>
    </div>
      <p class="font-bold py-0 text-reddish">Phone</p>
      <p class="py-4">Our customer support team is available for you.</p>
      <p class="font-bold py-0">
        (+92) 51-7061534
      </p>
    </div>
    <div class="bg-white px-8 py-4 rounded-lg">
      <div class="bg-gray-100 inline-block rounded-full p-[12px] sm:my-[12px] lg:my-[24px]">
      <img src="../assets/images/locate.png" class="lg:w-8 sm:w-6"/>
    </div>
      <p class="font-bold py-0 text-reddish">Address</p>
      <p class="py-4">Visit us for expert support and guidance.</p>
      <p class="font-bold  py-0">
        Office 1 & 8, 2nd Floor Rajput Arcade, Pakistan Town Phase 2 Islamabad, Pakistan.
      </p>
    </div>
    <!-- <div>
      <h4>Phone</h4>
      <p>Our customer support team is available</p>
      <p></p>
    </div> -->
  </div>
      <div>
</div>

</div>
<form class="px-auto lg:w-[50vw] md:px-8 bg-transparent py-8 rounded-md mx-auto border-2 border-white shadow-lg shadow-gray-200" @submit.prevent="submitForm">
      <div class="flex flex-col">
                            <h2 class="text-center my-6 font-bold uppercase text-reddish">
                                GET A QUOTE
                            </h2>
                            <input name="endpoint" type="hidden"  />
                            <div class="flex flex-wrap">
                                <div class="w-full md:w-6/12 px-4">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlfor="grid-password">
                                            First Name
                                        </label>
                                        <input type="text"
                                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" v-model="form.firstname" name="firstname" required>
                                    </div>
                                </div>
                                <div class="w-full md:w-6/12 px-4">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlfor="grid-password">
                                            Last Name
                                        </label>
                                        <input type="text"
                                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" v-model="form.lastname" name="lastname" required>
                                    </div>
                                </div>
                                <div class="w-full  px-4">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlfor="grid-password">
                                            Email address
                                        </label>
                                        <input type="email"
                                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  v-model="form.email"  name="email" required>
                                    </div>
                                </div>
                                <div class="w-full md:w-6/12 px-4">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlfor="grid-password">
                                          Phone Number
                                        </label>
                                        <input type="tel"
                                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" v-model="form.contact"  name="contact" required >
                                    </div>
                                </div>
                                <div class="w-full  px-4">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlfor="grid-password">
                                            Message
                                        </label>
                                        <textarea  rows="4" cols="50" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" v-model="form.message" name="message" required>
</textarea>
                                    </div>
                                </div>  
                                  <div id="recaptcha" class="w-full  px-4"> </div>
                                  <br>
                                <div class=" ">
                                <div v-if="loading" class="loader "></div></div>
                                <button v-if="loadinga"
                                class="btnstyle sm:mx-4">
                               Send Message</button>
                            </div>
                          </div>
</form>

<!-- <form  @submit.prevent="testForm">  
</form> -->
    </div>
</template>
    
<script>

import axios from 'axios';
import { ref } from 'vue';
// import VueRecaptcha from 'vue-recaptcha';
import { useToast } from "vue-toastification";// Import useToast from vue-toastification
import "vue-toastification/dist/index.css";
// import VueRecaptcha from 'vue-recaptcha';
export default {
	name: "Contact",
  // #F4505D
	data() {
		return {
			loghome:this.home,
      siteKey: '6LdhQ78pAAAAAEhfOH_H4atgFVzUleomv12qZdOf',
      form:{
        firstname:'',
        lastname:'',
        email:'',
        contact:'',
        message:''
      },
      loading: false,
      loadinga: true,
      toast : useToast(),
		}
	},
  mounted() {
    // Load reCAPTCHA script and render the widget
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.onload = this.renderRecaptcha;
    document.head.appendChild(script);
  },
	methods: {
    renderRecaptcha() {
      // Render the reCAPTCHA widget
      window.grecaptcha.render('recaptcha', {
        sitekey: '6LdhQ78pAAAAAEhfOH_H4atgFVzUleomv12qZdOf',
        callback: this.onRecaptchaVerify,
        // Include the "I'm not a robot" checkbox
        checkbox: true,
        // Optional: Customize reCAPTCHA appearance
        theme: 'light', // 'light' or 'dark'
        size: 'normal' // 'normal', 'compact', or 'invisible'
      });
    },
    onRecaptchaVerify(response) {
      // Handle verification response
      console.log('reCAPTCHA verified:', response);
      // You can also check the "I'm not a robot" checkbox status here if needed
    },
    submitForm() {
      const response = window.grecaptcha.getResponse();
      if (!response) {
        alert('Please complete the reCAPTCHA verification');
        return;
      }
      this.loading = true;
      this.loadinga=false
      axios.post('/api/submitform', this.form )
      .then((res) => {
        this.loading = false;
        this.loadinga = true;
          console.log("your result is" + res);
          this.toast.success("Login successfully", {
            timeout: 2000
          });
        })
                .catch((error) => {
                  this.loading = false;
        this.loadinga = true;
                    this.toast.error("Error sending data", { timeout: 2000 });
                    this.form = {};
                });
              
      },
		loginform(){
			home.classList.add("show");
		}
	}
}
</script>
<style scoped>
#recaptcha {
  margin-bottom: 20px;
}
/* HTML: <div class="loader"></div> */
.loader {
  width: 50px;
  aspect-ratio: 1;
  --_c:no-repeat radial-gradient(farthest-side,#25b09b 92%,#0000);
  background: 
    var(--_c) top,
    var(--_c) left,
    var(--_c) right,
    var(--_c) bottom;
  background-size: 12px 12px;
  animation: l7 1s infinite;
}
@keyframes l7 {to{transform: rotate(.5turn)}}
.input_box {
  position: relative;
  margin-top: 30px;
  width: 100%;
  height: 40px;
}
.input_box input {
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  padding: 0 30px;
  color: #333;
  transition: all 0.2s ease;
  border-bottom: 1.5px solid #aaaaaa;
}
.input_box input:focus {
  border-color: #7d2ae8;
}
.input_box i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #707070;
}
.input_box i.email,
.input_box i.password {
  left: 0;
}
.input_box input:focus ~ i.email,
.input_box input:focus ~ i.password {
  color: black;
}
.input_box i.pw_hide {
  right: 0;
  font-size: 18px;
  cursor: pointer;
}
.option_field {
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form_container a {
  color: #7d2ae8;
  font-size: 12px;
}
.form_container a:hover {
  text-decoration: underline;
}
.checkbox {
  display: flex;
  column-gap: 8px;
  white-space: nowrap;
}
.checkbox input {
  accent-color: #7d2ae8;
}
.checkbox label {
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  color: #0b0217;
}
.form_container .button {
  background: #7d2ae8;
  margin-top: 30px;
  width: 100%;
  padding: 10px 0;
  border-radius: 10px;
}
.login_signup {
  font-size: 12px;
  text-align: center;
  margin-top: 15px;
}
</style>
<!-- thelas,civilization -->