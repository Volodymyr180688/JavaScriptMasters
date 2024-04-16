import { getReviews } from './get-api'; // Перевірте та замініть шлях на ваш
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


async function fetchAndLogReviews() {
  try {
    const reviews = await getReviews();
    const unorderedList = document.querySelector('.reviews-list');
const galleryItems = reviews
  .map(
    review => `
    <li class="reviews-list-item swiper-slide">
      <img class="avatar_url" src=${review.avatar_url} width="48" alt="icon user">
      <h3 class="author"> ${review.author}</h3>
      <p class="review"> ${review.review}</p>
    </li>`
  )
    .join('');
  unorderedList.insertAdjacentHTML('beforeend', galleryItems);
  } catch (error) {
    window.alert('Error fetching reviews:', error);
  }
}


fetchAndLogReviews();


const swiper = new Swiper('.reviws-swiper', {
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  centeredSlidesPerView: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
on: {
    slideChangeTransitionEnd: function () {
      const nextButton = document.querySelector('.reviews-next-btn');
      const prevButton = document.querySelector('.reviews-prev-btn');
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
