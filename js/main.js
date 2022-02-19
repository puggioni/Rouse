//RESPONSIVE NAV
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-main");
  const navLinks = document.querySelectorAll(".nav-main li");

  burger.addEventListener("click", () => {
    //Toggle
    nav.classList.toggle("nav-active");
    //Burger animation
    burger.classList.toggle("toggle");
  });
  //Animated Links
  navLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 2}s`;
  });
};

navSlide();
