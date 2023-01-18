import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

// Portfolio section
const portfolioSlider = new Swiper(".portfolio-section__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".portfolio-section__next",
    prevEl: ".portfolio-section__prev",
  },
});

// Testimonials section
const testimonialsSlider = new Swiper(".testimonials__slider", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".testimonials-section__next",
    prevEl: ".testimonials-section__prev",
  },
});
