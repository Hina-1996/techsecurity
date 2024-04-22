const navmenua=document.getElementById('show_menu');
const navmenu=document.getElementById('nav_menu');
const close=document.getElementById('close_menu');
const navlink=document.querySelectorAll('.nav__link');
console.log(navmenu)
navlink.forEach(link=>
    link.addEventListener("click",()=>{
        navmenu.classList.add('hidden')}
    ))
const scrollUp=()=>{
    const scrollupbtn=document.getElementById("scroll-up");
    if(scrollY >= 250){
        scrollupbtn.classList.remove("-bottom-1/2");
        scrollupbtn.classList.add("bottom-4")
    }
    else{
        scrollupbtn.classList.add("-bottom-1/2");
        scrollupbtn.classList.remove("bottom-4")
    
    }
}
window.addEventListener('scroll', scrollUp)

const scrollheader=()=>{
  const header=document.getElementById("header");
  if(scrollY >= 50){
      header.classList.add("bg-white","border-b","border-gray","shadow-gray","shadow-md");
  }
  else{
      header.classList.remove("bg-white","border-b","shadow-3xl","border-gray","shadow-gray","shadow-md")
  
  }
}
window.addEventListener('scroll', scrollheader)
const activelink=()=>{
    const sections=document.querySelector("section");
    const navlinks=document.querySelector(".nav__link");
    let current="home";
    sections.forEach((section)=>{
        const sectiontop=section.offsetTop;
        if(scrollY>= sectiontop - 60){
            current=section.getAttribute("id");
        }
    });
    navlinks.forEach((item)=>{
        item.classList.remove("text-secondaryColor");
  if(item.href.includes(current)){
    item.classList.add("text-secondaryColor");
  }
    })
}