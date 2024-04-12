
import { sendCooperationRequest } from './post-api'; // Перевірте та замініть шлях на ваш

async function sendAndLogCooperationRequest() {
  try {
    const email = 'test@gmail.com'; // Замініть на вашу електронну адресу
    const comment = "User's comment"; // Замініть на ваш коментар

    const response = await sendCooperationRequest(email, comment);
    console.log(response); // Виводимо результат у консоль
  } catch (error) {
    console.error('Error sending cooperation request:', error);
  }
}

sendAndLogCooperationRequest();