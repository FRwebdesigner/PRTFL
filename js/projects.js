// projects.js

const projects = [
  {
    id: 1,
    title: "E-commerce Moderno",
    category: "web",
    description: "Tienda online completa con carrito, pagos y panel de administración.",
    image: "https://source.unsplash.com/random/600x400/?ecommerce",
    tags: ["React", "Node.js", "MongoDB"],
    live: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    category: "web",
    description: "Panel administrativo con gráficos interactivos y datos en tiempo real.",
    image: "https://source.unsplash.com/random/600x400/?dashboard",
    tags: ["Next.js", "Tailwind", "Recharts"],
    live: "#",
    github: "#"
  },
  {
    id: 3,
    title: "App de Tareas",
    category: "app",
    description: "Aplicación móvil para gestión de tareas con sincronización en la nube.",
    image: "https://source.unsplash.com/random/600x400/?mobileapp",
    tags: ["React Native", "Firebase"],
    live: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Landing Page Agencia",
    category: "design",
    description: "Diseño premium para agencia digital con animaciones avanzadas.",
    image: "https://source.unsplash.com/random/600x400/?website",
    tags: ["HTML", "CSS", "GSAP"],
    live: "#",
    github: "#"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderProjects(filteredProjects) {
    grid.innerHTML = '';
    
    filteredProjects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tags">
            ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.live}" target="_blank">Ver Proyecto <i class="fas fa-external-link-alt"></i></a>
            <a href="${project.github}" target="_blank">GitHub</a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Filtros
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      
      if (filter === 'all') {
        renderProjects(projects);
      } else {
        const filtered = projects.filter(p => p.category === filter);
        renderProjects(filtered);
      }
    });
  });

  // Cargar todos los proyectos al inicio
  renderProjects(projects);
});