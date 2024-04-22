<template>
	<div class=" w-full overflow-hidden relative">
    <!-- <div class="  ">
    <div class="grid sm:grid-cols-1 lg:grid-cols-3  w-full lg:h-[640px] xl:h-[900px] xl:nav">
    <div class=" sm:order-last lg:order-first relative lg:px-[112px] md:px-12 sm:px-[12px] my-auto">
    <form class="sm:mt-[-40px] lg:mt-auto md:mt-[-220px] bg-yellow  px-auto lg:w-[50vw] md:px-16 bg-transparent py-8 rounded-md" @submit.prevent="submitForm">
      <div class="flex flex-col">
                            <h2 class="text-center text-blueGray-400  mb-6 font-bold uppercase">
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
                                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" v-model="form.firstname" name="firstname">
                                    </div>
                                </div>
                                <div class="w-full md:w-6/12 px-4">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlfor="grid-password">
                                            Last Name
                                        </label>
                                        <input type="text"
                                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" v-model="form.lastname" name="lastname">
                                    </div>
                                </div>
                                <div class="w-full  px-4">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlfor="grid-password">
                                            Email address
                                        </label>
                                        <input type="email"
                                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  v-model="form.email"  name="email">
                                    </div>
                                </div>
                                <div class="w-full md:w-6/12 px-4">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlfor="grid-password">
                                          Phone Number
                                        </label>
                                        <input type="tel"
                                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" v-model="form.phone"  name="phone" >
                                    </div>
                                </div>
                                <div class="w-full  px-4">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlfor="grid-password">
                                            Message
                                        </label>
                                        <textarea  rows="4" cols="50" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" v-model="form.message" name="message">
</textarea>
                                    </div>
                                </div>
                                <button
                                class="sign_button mx-[13px] border-black border-[1px] shadow-lg mb-[-12] bg-black text-white mt-2 hover:bg-opacity-75 shadow-black">
                               Send Message</button>
                            </div>
                          </div>
</form>
</div>
<div class="w-100 lg:col-span-2">
  <img src="../../assets/images/contactpage.jpg" class="w-[100vw] sm:h-auto lg:h-[640px] md:h-auto  sm:mt-[-100px] lg:mt-0 xl:h-[900px]"/>
</div>
</div>
          </div> -->
          <div class=" items-center justify-center py-12 nav bg-gray-100">
          <div class="lg:pt-8 lg:pb-4">
            <h4 class="font-bold text-black text-center sm:text-[8px] lg:text-sm">Contact Us</h4>
  </div>
  <h2 class="text-center mb-8">WE ARE HERE TO HELP YOU</h2>
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
      <div class="bg-blue-50 inline-block rounded-full p-[12px] sm:my-[12px] lg:my-[24px]">
      <img src="../../assets/images/mail.png" class="lg:w-8 sm:w-6"/>
    </div>
      <p class="font-bold">Email Us</p>
      <p>We will response to you as early as possible.</p>
      <p class="font-bold text-blue-700">PITF.tkbench@gmail.com</p>
    </div>
    <div class="bg-white px-8 py-4 rounded-lg">
      <div class="bg-red-50 inline-block rounded-full p-[12px] sm:my-[12px] lg:my-[24px]">
      <img src="../../assets/images/phonecall.png" class="lg:w-8 sm:w-6"/>
    </div>
      <p class="font-bold">Phone</p>
      <p>Our customer support team is available for you.</p>
      <p class="font-bold text-red-600">
        (+92) 310-5660406
      </p>
    </div>
    <div class="bg-white px-8 py-4 rounded-lg">
      <div class="bg-darkgreen/10 inline-block rounded-full p-[12px] sm:my-[12px] lg:my-[24px]">
      <img src="../../assets/images/contactlocate.png" class="lg:w-8 sm:w-6"/>
    </div>
      <p class="font-bold">Address</p>
      <p>Visit us for expert support and guidance.</p>
      <p class="font-bold " style="color: #26B86C;">
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
<form class="sm:mt-[-40px] lg:mt-auto md:mt-[-220px] bg-yellow  px-auto lg:w-[50vw] md:px-16 bg-transparent py-8 rounded-md" @submit.prevent="submitForm">
      <div class="flex flex-col">
                            <h2 class="text-center text-blueGray-400  mb-6 font-bold uppercase">
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
                                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" v-model="form.firstname" name="firstname">
                                    </div>
                                </div>
                                <div class="w-full md:w-6/12 px-4">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlfor="grid-password">
                                            Last Name
                                        </label>
                                        <input type="text"
                                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" v-model="form.lastname" name="lastname">
                                    </div>
                                </div>
                                <div class="w-full  px-4">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlfor="grid-password">
                                            Email address
                                        </label>
                                        <input type="email"
                                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  v-model="form.email"  name="email">
                                    </div>
                                </div>
                                <div class="w-full md:w-6/12 px-4">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlfor="grid-password">
                                          Phone Number
                                        </label>
                                        <input type="tel"
                                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" v-model="form.contact"  name="contact" >
                                    </div>
                                </div>
                                <div class="w-full  px-4">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlfor="grid-password">
                                            Message
                                        </label>
                                        <textarea  rows="4" cols="50" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" v-model="form.message" name="message">
</textarea>
                                    </div>
                                </div>
                                <button
                                class="btnstyle">
                               Send Message</button>
                            </div>
                          </div>
</form>
<!-- <form  @submit.prevent="testForm">  
  <button
                                class="btnstyle">
                               Send Message</button>
</form> -->
    </div>
</template>
    
<script>
import axios from 'axios';
// import { useToast } from "vue-toastification";
export default {
	name: "Contact",
  // #F4505D
	data() {
		return {
			loghome:this.home,
      form:{
        firstname:'name',
        lastname:'end',
        email:'',
        contact:'',
        message:''
      },
      // toast : useToast(),
		}
	},
	methods: {
    // testForm(){
    //   axios.post('/api/create',this.form)
    // },
    submitForm(){
      axios.post('/api/submitform',this.form)
      .then(() => {
                        // this.toast.success("Send successfully ", { timeout: 3000 });
                        this.form = {};
                    
                })
                .catch((error) => {
                    // this.toast.error("Error sending data", { timeout: 3000 });
                });
    },
		loginform(){
			home.classList.add("show");
		}
	}
}
</script>
<style scoped>

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
