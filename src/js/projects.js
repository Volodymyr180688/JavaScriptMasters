import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 'auto',
  autoHeight: true,
  // on: {
  //   reachEnd: function () {
  //     const nextButton = document.querySelector('.next-btn');
  //     nextButton.disabled = true;
  //   },
  //     reachBeginning: function () {
  //     const nextButton = document.querySelector('.next-btn');
  //     nextButton.disabled = false;
  //   },
  // },
on: {
    slideChangeTransitionEnd: function () {
      const nextButton = document.querySelector('.next-btn');
      const prevButton = document.querySelector('.prev-btn');
      if (swiper.isEnd) {
        nextButton.disabled = true;
      } else {
        nextButton.disabled = false;
      }
      if (swiper.isBeginning) {
        prevButton.disabled = true;
      } else {
        prevButton.disabled = false;
      }
    },
  },
});