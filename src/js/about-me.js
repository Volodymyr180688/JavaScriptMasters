import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import 'swiper/css';

new Accordion('.main-accordion', {
  duration: 400,
  showMultiple: true,
});

const aboutSwiper= new Swiper('.about-me-swiper', {
    speed: 400,
    spaceBetween: 100,
  });
const aboutMeSwiper = document.querySelector('.about-me-swiper').swiper;
aboutMeSwiper();
