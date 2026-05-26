// contact.js

document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (name && email && message) {
        // Simulación de envío
        const btn = form.querySelector('button');
        const originalText = btn.textContent;

        btn.textContent = 'Enviando...';
        btn.disabled = true;

        setTimeout(() => {
          alert(`✅ ¡Mensaje enviado correctamente!\n\nGracias ${name}, te responderé pronto.`);
          form.reset();
          btn.textContent = originalText;
          btn.disabled = false;
        }, 1800);
      }
    });
  }

  // Animación suave al hacer scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.contact-form, .contact-info').forEach(el => {
    el.style.transition = 'all 0.8s ease';
    observer.observe(el);
  });

  console.log('%c✅ contact.js cargado correctamente', 'color: #6366f1; font-weight: bold');
});