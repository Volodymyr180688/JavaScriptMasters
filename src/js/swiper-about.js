import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

const aboutMeNextButton = document.querySelector('.about-button-next');
const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: aboutMeNextButton,
  },
  loop: true,
  direction: 'horizontal',
  watchOverflow: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
    },
  breakpoints: {
    375: {
      slidesPerView: '2',
    },
    768: {
      slidesPerView: '3',
    },
    1440: {
      slidesPerView: '4',
    },
  },
});