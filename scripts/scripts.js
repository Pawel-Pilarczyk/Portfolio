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
    console.log(window.outerWidth);
});



document.addEventListener('scroll',function(){

    const portfolio_el = $('.project');

    if(window.outerWidth < 1200){

        for(let i = 0; i<portfolio_el.length; i++){
            portfolio_el.eq(i).css("opacity",1);
        }

    }else{

        if(window.scrollY <= 1171.25 && window.scrollY >= 1100){

            for(let i = 0; i<portfolio_el.length; i++){
                portfolio_el.eq(i).addClass(`animate__animated animate__fadeIn`).css("opacity",1);
            }

        };

        if(window.scrollY >= 1840){
            $('#about-me >h1').addClass(`animate__animated animate__bounce`);
        };
     }
})