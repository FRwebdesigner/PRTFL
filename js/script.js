// script.js - Funcionalidades compartidas (Navbar, Menú móvil, Smooth Scroll)

document.addEventListener('DOMContentLoaded', () => {

  // ==================== MENÚ MÓVIL ====================
document.addEventListener('DOMContentLoaded', () => {

  // Menú móvil
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // ==================== SMOOTH SCROLL ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href.length > 1) { // Evita el "#" solo
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // ==================== EFECTO NAVBAR AL HACER SCROLL ====================
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.padding = '0.9rem 6%';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
      } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.92)';
        navbar.style.padding = '1.2rem 6%';
        navbar.style.boxShadow = 'none';
      }
    });
  }

  // ==================== ACTIVE LINK SEGÚN PÁGINA ====================
  function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    document.querySelectorAll('.nav-links a').forEach(link => {
      const href = link.getAttribute('href').split("#")[0];
      
      if (href === currentPage || 
          (currentPage === "index.html" && (href === "" || href === "index.html"))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  setActiveLink();

});

  // ==================== CONSOLE INFO ====================
  console.log('%c✅ script.js cargado correctamente - Portafolio', 
    'color: #6366f1; font-weight: bold; font-size: 14px;');

});