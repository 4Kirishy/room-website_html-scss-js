const burgerMenu = document.querySelector(".header__burger");
const navMenu = document.querySelector(".header__nav");
const body = document.body;
const home = document.querySelector(".hero");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const projects = document.querySelector(".projects");
const blog = document.querySelector(".blog");
const footer = document.querySelector(".footer");
const upBtn = document.querySelector(".up");
const navBtn = document.querySelectorAll(".nav__link");

if (burgerMenu && navMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("_active");
    navMenu.classList.toggle("_active");
    body.classList.toggle("_lock");
  });
  navBtn.forEach((el) => {
    el.addEventListener("click", () => {
      burgerMenu.classList.remove("_active");
      navMenu.classList.remove("_active");
      body.classList.remove("_lock");
    });
  });
}

const projectsSwiper = new Swiper(".projects-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 500,

  navigation: {
    nextEl: ".slider-btn-next",
    prevEl: ".slider-btn-prev",
  },

  pagination: {
    el: ".projects__pagination",
  },

  breakpoints: {
    476: {
      slidesPerView: 2,
    },
    660: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const testimonialsSwiper = new Swiper(".testimonials-slider", {
  // slidesPerView: 2,
  // spaceBetween: 20,

  pagination: {
    el: ".testimonials__pagination",
  },
  autoHeight: true,
  autoplay: {
    delay: 5000,
  },
  speed: 700,
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("_active");
    }
    // else {
    //   reveals[i].classList.remove("_active");
    // }
  }
}

console.log(window.innerHeight);
console.log(document.body.scrollTop);

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", () => {
  upBtn.classList.add("_active");
  if (window.scrollY === 0) upBtn.classList.remove("_active");
});
window.addEventListener("load", reveal);

function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
}

navBtn.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.innerHTML === "home") scrollTo(home);
    else if (el.innerHTML === "about us") scrollTo(about);
    else if (el.innerHTML === "services") scrollTo(services);
    else if (el.innerHTML === "projects") scrollTo(projects);
    else if (el.innerHTML === "blog") scrollTo(blog);
    else if (el.innerHTML === "contact") scrollTo(footer);
  });
});

upBtn.addEventListener("click", () => {
  scrollTo(home);
  // upBtn.classList.remove("_active");
  // return;
});
