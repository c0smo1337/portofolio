const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

const reveals = document.querySelectorAll('.reveal');

const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 80);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => obs.observe(el));

document.querySelectorAll('.skill-item.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${i * 80}ms`;
});

document.querySelectorAll('.proj-row').forEach((el, i) => {
  el.style.transitionDelay = `${i * 60}ms`;
});
