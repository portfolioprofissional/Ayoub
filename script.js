/* ===================================================== */
/* GSAP */
/* ===================================================== */

gsap.registerPlugin(ScrollTrigger);

/* ===================================================== */
/* CURSOR */
/* ===================================================== */

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";

  cursor.style.top = e.clientY + "px";

});

/* ===================================================== */
/* HERO ANIMAÇÃO */
/* ===================================================== */

gsap.from(".hero-tag",{

  opacity: 0,
  y: 30,

  duration: 1,

  ease: "power3.out"

});

gsap.from(".hero-text h1",{

  opacity: 0,
  y: 40,

  duration: 1.2,

  delay: .2,

  ease: "power3.out"

});

gsap.from(".hero-text p",{

  opacity: 0,
  y: 30,

  duration: 1,

  delay: .4,

  ease: "power3.out"

});

gsap.from(".hero-buttons",{

  opacity: 0,
  y: 30,

  duration: 1,

  delay: .6,

  ease: "power3.out"

});

/* ===================================================== */
/* FLOATING MOCKUP */
/* ===================================================== */

gsap.to(".floating",{

  y: -20,

  duration: 3,

  repeat: -1,

  yoyo: true,

  ease: "sine.inOut"

});

/* ===================================================== */
/* REVEAL SCROLL */
/* ===================================================== */

const reveals = document.querySelectorAll(".reveal");

reveals.forEach((element) => {

  gsap.to(element,{

    opacity: 1,

    y: 0,

    duration: 1.2,

    ease: "power3.out",

    scrollTrigger:{

      trigger: element,

      start: "top 85%",

    }

  });

});

/* ===================================================== */
/* PARALLAX HERO */
/* ===================================================== */

gsap.to(".hero-glow",{

  y: 100,

  scrollTrigger:{

    trigger: ".hero",

    scrub: true

  }

});

/* ===================================================== */
/* NAVBAR SCROLL */
/* ===================================================== */

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.padding = "18px 8%";

  }else{

    navbar.style.padding = "24px 8%";

  }

});