import axios from 'axios';

export async function getReviews() {
  const BASE_URL = 'https://portfolio-js.b.goit.study/api';
  const ENDPOINT = '/reviews';
  const url = `${BASE_URL}${ENDPOINT}`;

  try {
    const response = await axios.get(url);

    // Перевіряємо, що статус відповіді є успішним (200)
    if (response.status === 200) {
      // Витягуємо лише потрібні поля з кожного огляду
      const reviews = response.data.map(({ _id, author, avatar_url, review }) => ({
        author,
        avatar_url,
        review
      }));
      // Повертаємо відфільтровані дані про огляди
      return reviews;
    } else {
      // Якщо відповідь не є успішною, викидаємо помилку з відповідним статусом
      throw new Error('Server responded with status:', response.status);
    }
  } catch (error) {
    // Обробляємо помилку запиту
    console.error('There was a problem with the request:', error);
    throw error; // Перенаправляємо помилку для обробки на вищому рівні, якщо потрібно
  }
}