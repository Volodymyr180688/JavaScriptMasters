import { getReviews } from './get-api'; // Перевірте та замініть шлях на ваш

async function fetchAndLogReviews() {
  try {
    const reviews = await getReviews();
    console.log(reviews); // Виводимо дані у консоль
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
}

fetchAndLogReviews();