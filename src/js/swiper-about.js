import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

const aboutMeNextButton = document.querySelector('.about-button-wrapper');
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
  slidesPerView: 'auto',
on: {
    slideChangeTransitionEnd: function () {
      var items = document.querySelectorAll('.swiper-item');
      items.forEach(function(item) {
        item.classList.remove('active');
      });
      var activeSlideIndex = this.activeIndex;
      var activeSlide = items[activeSlideIndex];
      activeSlide.classList.add('active');
    }
  }
});

