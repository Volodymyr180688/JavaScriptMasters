import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
const titles = document.querySelectorAll('.about-me-title');
const contents = document.querySelectorAll('.accordion-open-about-me');
titles.forEach(item => {
  item.addEventListener('click', () => {
    const activeContent = document.querySelector(
      '#' + item.getAttribute('data-tab')
    );
    if (activeContent.classList.contains('active')) {
      activeContent.classList.remove('active');
      activeContent.classList.add('accordion-open-about-me');
      activeContent.style.maxHeight = 0;
    } else {
      contents.forEach(element => {
        element.classList.remove('active');
        element.style.maxHeight = 0;
      });
      titles.forEach(element => element.classList.remove('active'));
      item.classList.add('active');
      activeContent.classList.add('active');
      activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
  });
});

