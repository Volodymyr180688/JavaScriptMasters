import { sendCooperationRequest } from './post-api'; // Перевірте та замініть шлях на ваш

const userCommentForm = document.querySelector('.footer-form');
const backDrop = document.querySelector('.footer-backdrop');
const backDropMsg = document.querySelector('.footer-modal-response');
const modalCloseBtn = document.querySelector('.footer-modal-close-btn');

const inputEmailCheck = document.querySelector('#userEmail');
const emailResult = document.querySelector('.footer-form-fields-wrapper');

userCommentForm.addEventListener('submit', handlerSubmit);
backDrop.addEventListener('click', handleClick);
modalCloseBtn.addEventListener('click', onCloseBtn);
document.addEventListener('keydown', handleKyeDown);

inputEmailCheck.addEventListener('blur', onBlurHandle);

function responseTemplate(data) {
  return `<h3 class="footer-modal-title">${data.title}</h3>
                  <p class="footer-modal-content">${data.message}</p>`;
}

async function handlerSubmit(event) {
  event.preventDefault();

  try {
    const email = userCommentForm.elements.userEmail.value.trim();
    const comment = userCommentForm.elements.userComment.value.trim();

    const response = await sendCooperationRequest(email, comment);
    const markup = responseTemplate(response);
    backDrop.classList.add('is-open');
    backDropMsg.innerHTML = markup;
    event.target.reset();
  } catch (err) {
    console.error('Error sending cooperation request:', err);
  }
}

function handleClick(event) {
  if (event.target === event.currentTarget) {
    backDrop.classList.remove('is-open');
  }
}

function onCloseBtn(event) {
  backDrop.classList.remove('is-open');
}

function handleKyeDown(event) {
  if (event.code === 'Escape') {
    backDrop.classList.remove('is-open');
  }
}

// не дуже впевнений, що це виглядає гуд, але воно працює так я мені потрібно :)
function onBlurHandle(event) {
  const userInput = event.currentTarget.value.trim();
  if (event.target.classList.contains('input-after-green')) {
    emailResult.classList.remove('input-after-green');
    if (userInput.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      emailResult.classList.add('input-after-green');
    } else {
      emailResult.classList.add('input-after-red');
    }
  } else {
    emailResult.classList.remove('input-after-red');
    if (userInput.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      emailResult.classList.add('input-after-green');
    } else {
      emailResult.classList.add('input-after-red');
    }
  }
}
