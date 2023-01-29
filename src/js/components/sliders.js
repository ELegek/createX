import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

// Portfolio section
const portfolioSlider = document.querySelector(".portfolio-section__slider");
if (portfolioSlider) {
  new Swiper(".portfolio-section__slider", {
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
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".testimonials-section__next",
      prevEl: ".testimonials-section__prev",
    },
  });
}

// work-card
const workImages = document.querySelector(".work-images-slider");

if (workImages) {
  new Swiper(".work-images-nav", {
    spaceBetween: 20,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
  });
  new Swiper(workImagesSlider, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: workImagesNav,
    },
  });
}
