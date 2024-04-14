import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev',
  },
});