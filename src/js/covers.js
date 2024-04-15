// let lastScrollTop = 0;

// window.addEventListener('scroll', function() {
// let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

// if (currentScroll > lastScrollTop) {
// // Якщо прокручуємо вниз, виключаємо анімацію
// swiper.params.noSwiping = true;
// swiper.params.touchEventsTarget = 'wrapper'; // Це потрібно для того, щоб анімація не працювала під час прокрутки
// } else {
// // Якщо прокручуємо вгору, включаємо анімацію
// swiper.params.noSwiping = false;
// swiper.params.touchEventsTarget = 'container';
// }

// lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
// }, false);