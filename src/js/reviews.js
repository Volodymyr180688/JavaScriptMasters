import { getReviews } from './get-api'; // Перевірте та замініть шлях на ваш
import Swiper from 'swiper';

async function fetchAndLogReviews() {
  try {
    const reviews = await getReviews();
    //console.log(reviews);  Виводимо дані у консоль
    const unorderedList = document.querySelector('.reviews-list');
const galleryItems = reviews
  .map(
    review => `
    <li class="reviews-list-item">
      <img class="avatar_url" src=${review.avatar_url} width="48" alt="icon user">
      <h3 class="author"> ${review.author}</h3>
      <p class="review"> ${review.review}</p>
    </li>`
  )
    .join('');
  unorderedList.insertAdjacentHTML('beforeend', galleryItems);
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
}

fetchAndLogReviews();