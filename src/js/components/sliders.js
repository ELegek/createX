import Swiper, { Navigation, Thumbs } from "swiper";

// Portfolio section
const portfolioSlider = document.querySelector(".portfolio-section__slider");
if (portfolioSlider) {
  new Swiper(".portfolio-section__slider", {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".portfolio-section__next",
      prevEl: ".portfolio-section__prev",
    },
  });
}

// Testimonials section
const testimonialsSlider = document.querySelector(".testimonials__slider");
if (testimonialsSlider) {
  new Swiper(".testimonials__slider", {
    modules: [Navigation],
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".testimonials-section__next",
      prevEl: ".testimonials-section__prev",
    },
  });
}

// work - card;
const workImagesSlider = document.querySelector(".work-images-slider");
const workImagesMini = document.querySelector(".work-images-mini");

if (workImagesSlider) {
  var swiperMini = new Swiper(workImagesMini, {
    spaceBetween: 20,
    slidesPerView: 10,
    freeMode: true,
  });
  var swiper2 = new Swiper(workImagesSlider, {
    modules: [Navigation, Thumbs],
    spaceBetween: 20,
    navigation: {
      nextEl: ".work-images__next",
      prevEl: ".work-images__prev",
    },
    thumbs: {
      swiper: swiperMini,
    },
  });
}
