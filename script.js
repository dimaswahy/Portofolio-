// reveal on scroll
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 100) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// theme toggle
const toggle = document.getElementById('toggleTheme');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});
