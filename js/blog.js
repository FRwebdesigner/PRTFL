// blog.js

const blogPosts = [
  {
    id: 1,
    title: "Cómo crear un portafolio moderno con HTML, CSS y JavaScript",
    category: "web",
    date: "25 Mayo 2026",
    readTime: "8 min",
    image: "https://source.unsplash.com/random/600x400/?portfolio",
    excerpt: "Guía completa paso a paso para crear un portafolio profesional que destaque entre los demás.",
    link: "#"
  },
  {
    id: 2,
    title: "Las 10 mejores prácticas en React en 2026",
    category: "javascript",
    date: "20 Mayo 2026",
    readTime: "12 min",
    image: "https://source.unsplash.com/random/600x400/?react",
    excerpt: "Descubre las técnicas y patrones más actualizados para desarrollar con React de forma eficiente.",
    link: "#"
  },
  {
    id: 3,
    title: "Diseño UI/UX: Errores que debes evitar en tus proyectos",
    category: "design",
    date: "15 Mayo 2026",
    readTime: "6 min",
    image: "https://source.unsplash.com/random/600x400/?ux",
    excerpt: "Los errores más comunes en diseño de interfaces y cómo solucionarlos rápidamente.",
    link: "#"
  },
  {
    id: 4,
    title: "Optimización de rendimiento en aplicaciones web",
    category: "web",
    date: "10 Mayo 2026",
    readTime: "10 min",
    image: "https://source.unsplash.com/random/600x400/?performance",
    excerpt: "Técnicas avanzadas para mejorar la velocidad y experiencia de usuario en tu sitio web.",
    link: "#"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('blogGrid');
  const searchInput = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderPosts(posts) {
    grid.innerHTML = '';
    posts.forEach(post => {
      const card = document.createElement('div');
      card.className = 'blog-card';
      card.innerHTML = `
        <img src="${post.image}" alt="${post.title}">
        <div class="blog-content">
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <div class="blog-meta">
            <span>${post.date}</span>
            <span>${post.readTime}</span>
          </div>
          <a href="${post.link}" class="btn secondary" style="margin-top: 1rem; width: 100%; text-align: center;">Leer más</a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Filtros por categoría
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');
      
      if (category === 'all') {
        renderPosts(blogPosts);
      } else {
        const filtered = blogPosts.filter(post => post.category === category);
        renderPosts(filtered);
      }
    });
  });

  // Buscador
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = blogPosts.filter(post => 
      post.title.toLowerCase().includes(term) || 
      post.excerpt.toLowerCase().includes(term)
    );
    renderPosts(filtered);
  });

  // Cargar todos los posts inicialmente
  renderPosts(blogPosts);
});