import axios from 'axios';

export async function sendCooperationRequest(email, comment) {
  const BASE_URL = 'https://portfolio-js.b.goit.study/api';
  const ENDPOINT = '/requests';
  const url = `${BASE_URL}${ENDPOINT}`;

  try {
    const response = await axios.post(url, { email, comment });

    // Перевіряємо, що статус відповіді є успішним (201)
    if (response.status === 201) {
      // Повертаємо відповідь
      return response.data;
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