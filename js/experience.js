// experience.js

const experiences = [
  {
    position: "Desarrollador Full Stack Freelance",
    company: "Trabajos Independientes",
    date: "Enero 2024 - Actualidad",
    location: "Maldonado, Uruguay",
    description: "Desarrollo de proyectos web completos para clientes locales e internacionales.",
    achievements: [
      "Desarrollé más de 15 proyectos completos",
      "Aumenté la conversión de sitios en un promedio del 45%",
      "Implementación de diseños responsivos y optimizados"
    ]
  },
  {
    position: "Frontend Developer",
    company: "Digital Agency XYZ",
    date: "Marzo 2023 - Diciembre 2023",
    location: "Montevideo, Uruguay",
    description: "Desarrollo de interfaces modernas para clientes corporativos.",
    achievements: [
      "Rediseño de 8 sitios web principales",
      "Implementación de React en proyectos de la empresa",
      "Mejora de rendimiento del 60% en aplicaciones"
    ]
  },
  {
    position: "Desarrollador Web Junior",
    company: "Tech Solutions",
    date: "Agosto 2022 - Febrero 2023",
    location: "Punta del Este, Uruguay",
    description: "Mantenimiento y desarrollo de sitios web corporativos.",
    achievements: [
      "Creación de landing pages de alta conversión",
      "Optimización SEO de múltiples sitios",
      "Soporte técnico continuo a clientes"
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const timeline = document.getElementById('experienceTimeline');

  experiences.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <div class="timeline-content">
        <h3>${exp.position}</h3>
        <p class="company">${exp.company} • ${exp.location}</p>
        <p class="date">${exp.date}</p>
        <p>${exp.description}</p>
        <ul>
          ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
        </ul>
      </div>
    `;
    timeline.appendChild(item);
  });

  console.log('%c✅ experience.js cargado correctamente', 'color: #6366f1; font-weight: bold');
});