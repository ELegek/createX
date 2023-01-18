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
