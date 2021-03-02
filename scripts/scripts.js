//Sliding nav operation
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');




    burger.addEventListener('click', ()=>{

        nav.classList.toggle('nav-active');

        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4  }s`;
            }

        })


        burger.classList.toggle('toggle');

    });


}
navSlide();


// ===========================================
// ========== CSS ANIMATION OPERATE===========
//============================================


document.querySelector('.logo').addEventListener('click',function(){
    console.log(window.scrollY);
});



document.addEventListener('scroll',function(){

    if(window.scrollY <= 1171.25 && window.scrollY >= 1100){
        const portfolio_el = $('.project');
        for(let i = 0; i<portfolio_el.length; i++){
            portfolio_el.eq(i).addClass(`animate__animated animate__fadeIn animate__delay-${i}s`).css("opacity",1);
        }
    }

})