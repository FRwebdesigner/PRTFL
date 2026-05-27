// faq.js

const faqs = [
  {
    question: "¿Cuánto tiempo tardas en hacer un proyecto?",
    answer: "Depende del alcance. Un sitio web sencillo suele tomar entre 2 y 4 semanas. Proyectos más complejos (e-commerce, web apps) pueden tomar entre 6 y 10 semanas."
  },
  {
    question: "¿Trabajas con clientes fuera de Uruguay?",
    answer: "Sí. He trabajado con clientes de Argentina, España, Estados Unidos y México sin problema. Usamos herramientas como Zoom, Notion y Figma para mantener una excelente comunicación."
  },
  {
    question: "¿Haces mantenimiento después de entregar el proyecto?",
    answer: "Sí. Ofrezco 30 días de soporte gratuito después de la entrega. También tengo paquetes de mantenimiento mensual para actualizaciones y mejoras."
  },
  {
    question: "¿Qué tecnologías utilizas?",
    answer: "Principalmente: HTML, CSS, JavaScript, React / Next.js, Node.js, Tailwind CSS y Firebase. Adapto la tecnología según las necesidades del proyecto."
  },
  {
    question: "¿Puedo ver el avance del proyecto mientras lo desarrollas?",
    answer: "Por supuesto. Trabajo con metodología ágil y te muestro avances semanales para que puedas dar feedback en tiempo real."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('faqGrid');

  faqs.forEach((faq, index) => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML = `
      <div class="faq-question" data-index="${index}">
        ${faq.question}
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="faq-answer">${faq.answer}</div>
    `;
    container.appendChild(item);
  });

  // Toggle FAQ
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector('i');

      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      icon.style.transform = answer.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0)';
    });
  });
});