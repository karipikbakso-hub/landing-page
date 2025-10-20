// Animasi saat elemen muncul di layar
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

// Tombol Hubungi Kami langsung buka WhatsApp
document.querySelector('.btn-wa').addEventListener('click', () => {
  window.open('https://wa.me/6281234567890', '_blank');
});
