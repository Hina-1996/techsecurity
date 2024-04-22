import {createRouter, createWebHistory} from 'vue-router'
import HomeBode from '../resources/js/HomeBode.vue';
import Partners from '../resources/js/Partners.vue';
import Control from '../resources/js/Control.vue';
import Solar from '../resources/js/Solar.vue';
import Parking from '../resources/js/Parking.vue';
import Gateautomation from '../resources/js/Gateautomation.vue';
import Address from '../resources/js/Address.vue';
import About from '../resources/js/About.vue';
import Barrier from '../resources/js/Barrier.vue';
import Clients from '../resources/js/Clients.vue';
import Contact from '../resources/js/Contact.vue';
const routes=[
    {
    name:'HomeBode',path:'/',
    component:HomeBode,
},
{
    name:'Contact',
    path:'/Contact',
    component:Contact,
},
{
    name:'Partners',
    path:'/Partners',
    component:Partners
},
{
    name:'Clients',
    path:'/Clients',
    component:Clients
},
{
    name:'Control',
    path:'/Control',
    component:Control
},
{
    name:'Address',
    path:'/Address',
    component:Address
},
{
    name:'Solar',
    path:'/Solar',
    component:Solar,
},
{
    name:'Parking',
    path:'/Parking',
    component:Parking,
},
{
    name:'Gateautomation',
    path:'/Gateautomation',
    component:Gateautomation
},
{
    name:'About',
    path:'/About',
    component:About
},
{
    name:'Barrier',
    path:'/Barrier',
    component:Barrier
},
]
// const router=new createRouter({
//     history:createWebHistory(),
//     routes,
// })
const router=new createRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
      },
      history:createWebHistory(),
      routes,
})
export default router;