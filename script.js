lucide.createIcons();

const cardContainer = document.querySelector('.card-container');
const card = document.querySelector('.card');
const light = document.querySelector('.sheen-light');
const shadow = document.querySelector('.product-shadow');
const productImage = document.querySelector('.product-image');

const TILT_AMOUNT = 12; // Slightly less tilt for a softer feel

cardContainer.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((x - centerX) / centerX) * -TILT_AMOUNT;
  const rotateY = ((y - centerY) / centerY) * TILT_AMOUNT;

  card.style.setProperty('--rotateX', `${rotateX}deg`);
  card.style.setProperty('--rotateY', `${rotateY}deg`);

  light.style.setProperty('--light-x', `${x}px`);
  light.style.setProperty('--light-y', `${y}px`);

  const shadowX = rotateX * -1.5;
  const shadowY = rotateY * -1.5;
  shadow.style.setProperty('--shadow-x', `${shadowX}px`);
  shadow.style.setProperty('--shadow-y', `${shadowY}px`);
});

cardContainer.addEventListener('mouseenter', () => {
  card.style.transition = 'transform 0.1s ease-out';
  light.style.opacity = '1';
});

cardContainer.addEventListener('mouseleave', () => {
  card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
  light.style.opacity = '0';
  card.style.setProperty('--rotateX', '0deg');
  card.style.setProperty('--rotateY', '0deg');
});