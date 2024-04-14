import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


const titles = document.querySelectorAll('.about-me-title');
const contents = document.querySelectorAll('.accordion-open');

titles.forEach(item => {
  item.addEventListener('click', () => {
    const activeContent = document.querySelector(
      '#' + item.getAttribute('data-tab')
    );

    if (activeContent.classList.contains('active')) {
      activeContent.classList.remove('active');
      activeContent.classList.add('accordion-open');
      activeContent.style.maxHeight = 0;
    } else {
      contents.forEach(element => {
        element.classList.remove('active');
        element.style.maxHeight = 0;
      });
      titles.forEach(element => element.classList.remove('active'));

      item.classList.add('active');
      activeContent.classList.add('active');
      activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
  });
});


const swiperAboutMe = document.querySelector("#carousel-about-me-list");

const buttonEl = document.querySelector('.swiper-button-next');

const swiper = new Swiper(swiperAboutMe, {
  modules: [Navigation, Pagination,],
  direction: 'horizontal',
  spaceBetween: 0,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  slidesPerView: 2,
  initialSlide: 1,
  updateOnWindowResize: true,
    breakpoints: {
        319: {
        slidesPerView:1,
    },
    767: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },
  mousewheel: {
    enabled: true,
    invert: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  loop: true,
  allowTouchMove: true,
  followFinger: true,
  simulateTouch: true,
});

