const navmenua=document.getElementById('show_menu');
const navmenu=document.getElementById('nav_menu');
const close=document.getElementById('close_menu');
const navlink=document.querySelectorAll('.nav__link');
// console.log(navmenu)
// navlink.forEach(link=>
//     link.addEventListener("click",()=>{
//         navmenu.classList.add('hidden')}
//     ))
document.addEventListener("DOMContentLoaded", function() {
    const scrollUp = () => {
        const scrollupbtn = document.getElementById("scroll-up");
        if (scrollupbtn) {
            if (scrollY >= 250) {
                scrollupbtn.classList.remove("-bottom-1/2");
                scrollupbtn.classList.add("bottom-4");
            } else {
                scrollupbtn.classList.add("-bottom-1/2");
                scrollupbtn.classList.remove("bottom-4");
            }
        }
    };
    

    window.addEventListener('scroll', scrollUp);
});
const scrollheader = () => {
    const header = document.querySelector(".items-center");
    // const logoImage = document.querySelector(".items-center img");
    const navLinks = document.querySelectorAll('.nav__link');

    if (window.scrollY >= 50) {
        header.classList.add("bg-white", "border-b", "shadow-gray-400", "shadow-lg", "text-gray-600");
        // Change image src
        // logoImage.src = "../";
        // Change text color
        navLinks.forEach(link => {
            link.classList.add("text-gray-600");
        });
    } else {
        header.classList.remove("bg-white", "border-b", "shadow-gray-400", "shadow-lg", "text-gray-600");
        // Change image src back to original
        // logoImage.src = "../../assets/images/PITF Logo/PNG/PITF with Black.png";
        // Change text color back to original
        navLinks.forEach(link => {
            link.classList.remove("text-gray-600");
        });
    }
}

// window.addEventListener('scroll', scrollheader);

// const scrollheader=()=>{
//   const header=document.getElementById("header");
//   if(scrollY >= 50){
//       header.classList.add("bg-white","border-b","border-gray","shadow-gray","shadow-3xl","color-red");
//   }
//   else{
//       header.classList.remove("bg-white","border-b","shadow-lg","border-gray","shadow-gray")
  
//   }
// }
window.addEventListener('scroll', scrollheader)
const activelink = () => {
    const sections = document.querySelectorAll("section");
    const navlinks = document.querySelectorAll(".nav__link");
    let current = "home";
    sections.forEach((section) => {
        const sectiontop = section.offsetTop;
        if (window.scrollY >= sectiontop - 60) {
            current = section.getAttribute("id");
        }
    });
    navlinks.forEach((item) => {
        item.classList.remove("text-secondaryColor");
        if (item.href.includes(current)) {
            item.classList.add("text-secondaryColor");
        }
    });
};