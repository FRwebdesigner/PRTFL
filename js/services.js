// services.js

const services = [
  {
    id: 1,
    icon: "fas fa-code",
    title: "Desarrollo Web",
    description: "Sitios web modernos, rápidos y optimizados para SEO.",
    fullDescription: "Desarrollo de sitios web corporativos, landing pages, blogs y tiendas online completamente personalizadas con las mejores prácticas de desarrollo.",
    features: ["Sitios Responsivos", "SEO Técnico", "Optimización de Velocidad", "Panel de Administración"],
    price: "Desde $800"
  },
  {
    id: 2,
    icon: "fas fa-mobile-alt",
    title: "Frontend Development",
    description: "Interfaces modernas y experiencias de usuario excepcionales.",
    fullDescription: "Creación de interfaces intuitivas usando React, Next.js y animaciones avanzadas para ofrecer la mejor experiencia posible.",
    features: ["React / Next.js", "Animaciones GSAP", "Diseño Pixel Perfect", "Estado Avanzado"],
    price: "Desde $1200"
  },
  {
    id: 3,
    icon: "fas fa-paint-brush",
    title: "Diseño UI/UX",
    description: "Diseños atractivos y funcionales centrados en el usuario.",
    fullDescription: "Diseño completo de interfaces, prototipos interactivos, wireframes y sistemas de diseño coherentes.",
    features: ["Prototipos en Figma", "User Research", "Sistema de Diseño", "Testing de Usabilidad"],
    price: "Desde $650"
  },
  {
    id: 4,
    icon: "fas fa-shopping-cart",
    title: "E-commerce",
    description: "Tiendas online completas y listas para vender.",
    fullDescription: "Desarrollo de tiendas online profesionales con carrito de compras, pasarela de pago y gestión de inventario.",
    features: ["Carrito de Compras", "Pasarelas de Pago", "Gestión de Pedidos", "Diseño Conversión"],
    price: "Desde $1500"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('servicesGrid');
  const modal = document.getElementById('serviceModal');
  const modalBody = document.getElementById('modalBody');
  const closeModal = document.querySelector('.close-modal');

  // Renderizar tarjetas
  services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
      <div class="service-icon">
        <i class="${service.icon}"></i>
      </div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <ul>
        ${service.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
      </ul>
      <button class="btn secondary view-details" data-id="${service.id}">Ver Detalles</button>
    `;
    grid.appendChild(card);
  });

  // Abrir modal
  document.querySelectorAll('.view-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-id'));
      const service = services.find(s => s.id === id);
      
      modalBody.innerHTML = `
        <h2>${service.title}</h2>
        <p style="font-size: 1.1rem; margin: 1.5rem 0;">${service.fullDescription}</p>
        <h3>Características Incluidas:</h3>
        <ul style="margin: 1rem 0 2rem;">
          ${service.features.map(f => `<li style="margin: 8px 0;">${f}</li>`).join('')}
        </ul>
        <p><strong>Precio estimado:</strong> ${service.price}</p>
        <a href="contact.html" class="btn primary" style="width: 100%; margin-top: 1.5rem;">Solicitar este Servicio</a>
      `;
      
      modal.style.display = 'flex';
    });
  });

  // Cerrar modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Cerrar modal al hacer clic fuera
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  console.log('%c✅ services.js cargado correctamente', 'color: #6366f1; font-weight: bold');
});