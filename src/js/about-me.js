import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: true,
    openOnInit: [0],
  
    onOpen: function (currentElement) {
      // console.log(currentElement);
      // console.log('currentElement is open');
     
      currentElement.querySelector('svg.ac-icon').classList.add('ac-icon-active');
    },
    onClose: function (currentElement) {
      // console.log(currentElement);
      // console.log('currentElement is closed');
    
      currentElement
        .querySelector('svg.ac-icon')
        .classList.remove('ac-icon-active');
    },
  });