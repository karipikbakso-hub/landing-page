// Simple UI interactions: intersection animations, mobile nav toggle, navbar change on scroll
document.addEventListener('DOMContentLoaded', () => {
  // Intersection observer for [data-animate]
  const io = new IntersectionObserver((entries) => {
    entries.forEach(ent => {
      if (ent.isIntersecting) ent.target.classList.add('visible');
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-animate]').forEach(el => io.observe(el));

  // Nav toggle (mobile)
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle && navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
    if (navLinks.classList.contains('open')) {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.right = '20px';
      navLinks.style.top = '64px';
      navLinks.style.background = '#fff';
      navLinks.style.padding = '12px';
      navLinks.style.boxShadow = '0 8px 30px rgba(2,6,23,0.08)';
      navLinks.style.borderRadius = '10px';
    } else {
      navLinks.style.display = '';
      navLinks.style.boxShadow = '';
    }
  });

  // Navbar shrink on scroll
  const navbar = document.querySelector('.navbar');
  const hero = document.querySelector('.hero');
  const shrink = () => {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 6px 24px rgba(2,6,23,0.08)';
    } else {
      navbar.style.boxShadow = '0 2px 12px rgba(2,6,23,0.06)';
    }
  };
  shrink();
  window.addEventListener('scroll', shrink);

  // Ensure WA links open in new tab safely (already in markup) - no further action needed
});
