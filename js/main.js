//RESPONSIVE NAV
const navSlide = () =>{
    const burger = document.querySelector ('.burger');
    const nav = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li')
   
    burger.addEventListener('click',()=>{
        //Toggle
        nav.classList.toggle('nav-active');

        //Animated Links
        navLinks.forEach((link, index)=>{
            if  (link.style.animation){
                 link.style.animation = ''
            } else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + .2}s`
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();