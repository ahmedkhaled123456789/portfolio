//Navigation bar effects on scroll
window.onscroll= function(){
    const header= document.querySelector("header");
    if(window.scrollY > 0 ){
        header.classList.toggle("sticky");
     }
}
//service section - Modal
const clickModal =document.querySelectorAll(".learn-more-btn");
const modal=document.querySelectorAll('.service-modal');
const modalBtn=document.querySelectorAll('.modal-close-btn ');
 
// var modals= function(modalClick)  {
//     modal[modalClick].classList.add("active");
// }

clickModal.forEach( (ele, i) => {
    ele.addEventListener("click", () =>{
        modal[i].classList.add("active");
        // modals(i);
      });
});

modalBtn.forEach((ele) =>{
ele.addEventListener("click", () =>{
    modal.forEach((mod)=>{
        mod.classList.remove("active");
    })
})
})
 


//Portfolio section - Modal
const clickModalPo =document.querySelectorAll(".img-card");
const modalPo=document.querySelectorAll('.portfolio-modal');
const modalBtnPo=document.querySelectorAll('.portfolio-close-btn ');
 
 

clickModalPo.forEach( (ele, i) => {
    ele.addEventListener("click", () =>{
        modalPo[i].classList.add("active");
       });
});

modalBtnPo.forEach((ele) =>{
ele.addEventListener("click", () =>{
    modalPo.forEach((mod)=>{
        mod.classList.remove("active");
    })
})
})



//Our clients - Swiper


var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//Website dark/light theme
// function switcherFun(){
//     const swittcher =document.querySelector('.theme-btn');

//     swittcher.addEventListener('click',function (){
//         this.querySelector("i").classList.toggle("fa-moon");
//         this.querySelector("i").classList.toggle("fa-sun");
//         document.body.classList.toggle("t-dark")
    
    
//     });
// }
// switcherFun()
function switcherFun(){
    const swittcher =document.querySelector('.theme-btn');

    swittcher.addEventListener('click',function (){
        this.querySelector("i").classList.toggle("fa-moon");
        this.querySelector("i").classList.toggle("fa-sun");
        document.body.classList.toggle("t-dark")
    
    
    });
}
switcherFun()



















//Scroll to top button
const scrolltotop = document.querySelector('.scrolltotop-btn');
window.addEventListener('scroll',function(){
    scrolltotop.classList.toggle('active', window.scrollY > 500);
 
});
 
scrolltotop.addEventListener('click',function(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})
//Navigation menu items active on page scroll
 

window.addEventListener('scroll',function(){
    const sections=document.querySelectorAll('section');
 
    sections.forEach(ele =>{
        let sectionHieght=ele.offsetHeight;
        let sectionTop=ele.offsetTop - 50;
        let id = ele.getAttribute("id");
            if(window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHieght){
         document.querySelector(".nav-items a[href*=" + id +"]").classList.add("active");

            }else {
                document.querySelector(".nav-items a[href*=" + id +"]").classList.remove("active");

            };
    });
 });





 
 
 
//Responsive navigation menu toggle

//Scroll reveal animations
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations