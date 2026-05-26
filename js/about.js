// about.js - Animaciones y funcionalidades específicas para la página Sobre Mí

document.addEventListener('DOMContentLoaded', () => {

  // ==================== ANIMACIONES AL HACER SCROLL ====================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  // Elementos a animar
  const animateElements = document.querySelectorAll('.about-text, .about-image, .timeline-item, .value-card, .about-cta');

  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
  });

  // ==================== ANIMACIÓN EXTRA PARA LA IMAGEN ====================
  const aboutImage = document.querySelector('.about-image img');
  if (aboutImage) {
    aboutImage.addEventListener('mouseenter', () => {
      aboutImage.style.transform = 'scale(1.05)';
    });
    
    aboutImage.addEventListener('mouseleave', () => {
      aboutImage.style.transform = 'scale(1)';
    });
  }

  // ==================== EFECTO PARALLAX SUAVE EN EL HERO ====================
  const hero = document.querySelector('.about-hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        hero.style.backgroundPositionY = `${scrollY * 0.3}px`;
      }
    });
  }

  // ==================== CONTADOR DE AÑOS DE EXPERIENCIA (Opcional) ====================
  function animateCounter() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const increment = target / 50;

      let count = 0;
      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(count);
        }
      }, 30);
    });
  }

  // Ejecutar contador cuando la sección sea visible
  const experienceSection = document.querySelector('.about-experience');
  if (experienceSection) {
    const expObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounter();
        expObserver.disconnect();
      }
    }, { threshold: 0.5 });

    expObserver.observe(experienceSection);
  }

  console.log('%c✅ about.js cargado correctamente', 'color: #6366f1; font-weight: bold');
});