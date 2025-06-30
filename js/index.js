       document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.mobile-sidebar').classList.add('show');
  document.querySelector('.overlay').classList.add('show');
});

document.querySelector('.close-sidebar').addEventListener('click', function() {
  document.querySelector('.mobile-sidebar').classList.remove('show');
  document.querySelector('.overlay').classList.remove('show');
});

// slider

const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  updateDots(index);
}

function updateDots(index) {
  const dots = document.querySelectorAll('.slider-dots span');
  dots.forEach(dot => dot.classList.remove('active-dot'));
  if (dots[index]) dots[index].classList.add('active-dot');
}

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => {
    current = index;
    showSlide(current);
  });
  dotsContainer.appendChild(dot);
});

showSlide(current);
