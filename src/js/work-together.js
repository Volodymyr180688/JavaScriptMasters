import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { sendCooperationRequest } from './post-api';

const userCommentForm = document.querySelector('.footer-form');
const backDrop = document.querySelector('.footer-backdrop');
const backDropMsg = document.querySelector('.footer-modal-response');
const modalCloseBtn = document.querySelector('.footer-modal-close-btn');
const greenRedInputBottomLine = document.querySelector(
  '.green-or-red-bottom-line'
);

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

    if (
      emailResult.classList.contains('input-after-green') &&
      greenRedInputBottomLine.classList.contains('border-bottom-color-green')
    ) {
      emailResult.classList.remove('input-after-green');
      greenRedInputBottomLine.classList.remove('border-bottom-color-green');
    }
    event.target.reset();
  } catch (err) {
    iziToast.error({
      position: 'topCenter',
      title: 'Error',
      message: '❌ Something went wrong. Try again later.',
    });
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

// виглядає не дуже, але воно працює так як мені потрібно :)
function onBlurHandle(event) {
  const userInput = event.currentTarget.value.trim();
  if (
    event.target.classList.contains('input-after-green') &&
    event.target.classList.contains('border-bottom-color-green')
  ) {
    emailResult.classList.remove('input-after-green');
    greenRedInputBottomLine.classList.remove('border-bottom-color-green');
    if (userInput.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      emailResult.classList.add('input-after-green');
      greenRedInputBottomLine.classList.add('border-bottom-color-green');
    } else {
      emailResult.classList.add('input-after-red');
      greenRedInputBottomLine.classList.add('border-bottom-color-red');
    }
  } else {
    emailResult.classList.remove('input-after-red');
    greenRedInputBottomLine.classList.remove('border-bottom-color-red');
    if (userInput.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      emailResult.classList.add('input-after-green');
      greenRedInputBottomLine.classList.add('border-bottom-color-green');
    } else {
      emailResult.classList.add('input-after-red');
      greenRedInputBottomLine.classList.add('border-bottom-color-red');
    }
  }
}
