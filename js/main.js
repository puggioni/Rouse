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
};

navSlide();
