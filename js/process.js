// process.js

const steps = [
  {
    number: "01",
    title: "Descubrimiento",
    description: "Reunión inicial para entender tus objetivos, público objetivo y requerimientos del proyecto."
  },
  {
    number: "02",
    title: "Investigación & Planificación",
    description: "Análisis de competidores, definición de estructura, wireframes y estrategia del proyecto."
  },
  {
    number: "03",
    title: "Diseño",
    description: "Creación de mockups y prototipos interactivos en Figma hasta que estés 100% satisfecho."
  },
  {
    number: "04",
    title: "Desarrollo",
    description: "Programación frontend y backend con código limpio, responsive y optimizado."
  },
  {
    number: "05",
    title: "Pruebas & Revisión",
    description: "Pruebas exhaustivas, correcciones y ajustes según tu feedback."
  },
  {
    number: "06",
    title: "Lanzamiento & Soporte",
    description: "Publicación del proyecto + 30 días de soporte gratuito post-lanzamiento."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('processSteps');

  steps.forEach(step => {
    const div = document.createElement('div');
    div.className = 'process-step';
    div.innerHTML = `
      <div class="step-number">${step.number}</div>
      <h3>${step.title}</h3>
      <p>${step.description}</p>
    `;
    container.appendChild(div);
  });
});