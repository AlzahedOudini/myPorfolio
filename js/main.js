/*==================== SHOW MENU ====================*/

const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)
  
  // Validate that variables exist
  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show-menu')
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
       var sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== ABOUT SECTION TABS ====================*/ 

/*
(() =>{
    const aboutSection = document.querySelector(".about"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
        if(event.target.classList.contains("tab-item") && 
        !event.target.classList.contains("active")){
            console.log('click')
            
        }
    })
})
*/ 

var aboutOther = document.querySelector(".about-other");
var aboutTabs = aboutOther.querySelector(".about-tabs");
var tabItem = document.querySelectorAll(".tab-item");
var contentAllBox = document.querySelector(".content-all-box");
var tabContent = document.querySelector(".tab-content");


for(let i = 0; i < tabItem.length; i++){
    tabItem[i].addEventListener("click", function(){
        tabItem[i].classList.add("active");
        console.log(tabItem[i]);
        console.log(aboutTabs.querySelector(".active"));
    });
  }

  /* 
  
  aboutTabs.querySelector(".active").classList.remove("active");
  
        contentAllBox.querySelector(".active").classList.remove("active");
        tabContent[i].classList.add("active");
  
  */

 var tabs = document.querySelector(".tabs");
 var tabHeader = tabs.querySelector(".tabHeader");
 var tabBody = document.querySelector(".tabBody");
 var tabsButton = document.querySelectorAll(".tabsButton");
 var box = document.querySelectorAll(".box");
 
 var background = document.querySelector(".bg");
 
 
 
 
 for(let i = 0; i < tabsButton.length; i++){
   tabsButton[i].addEventListener("click", function(){
     tabHeader.querySelector(".active").classList.remove("active");
     tabsButton[i].classList.add("active");
     tabBody.querySelector(".active").classList.remove("active");
     box[i].classList.add("active");
   });
 }
 




 const mySwiper = new Swiper('.texti-container', {
    // Optional parameters
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    }
  });
 