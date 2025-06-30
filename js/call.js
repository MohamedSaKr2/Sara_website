// فتح/إغلاق السايدبار
document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.mobile-sidebar').classList.add('show');
  document.querySelector('.overlay').classList.add('show');
});

document.querySelector('.close-sidebar').addEventListener('click', function() {
  document.querySelector('.mobile-sidebar').classList.remove('show');
  document.querySelector('.overlay').classList.remove('show');
});