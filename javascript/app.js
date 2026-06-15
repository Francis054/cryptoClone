
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav--menu-items a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});