function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function toggleMarqueeAnimation(isInView) {
  const marqueeLines = document.querySelectorAll('.marquee__line');
  marqueeLines.forEach(line => {
    line.style.animationPlayState = isInView ? 'running' : 'paused';
  });
}

function handleScroll() {
  const coversSection = document.querySelector('.covers-section');
  const isInView = isInViewport(coversSection);
  toggleMarqueeAnimation(isInView);
}

// Викликаємо функцію при завантаженні сторінки та при прокрутці
window.addEventListener('load', handleScroll);
window.addEventListener('scroll', handleScroll);