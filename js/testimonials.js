// testimonials.js

const testimonials = [
  {
    name: "Carlos Rodríguez",
    position: "CEO - Digital Solutions",
    image: "https://source.unsplash.com/random/100x100/?man",
    text: "Trabajar con él fue una excelente experiencia. Entregó un sitio web mucho mejor de lo esperado, con gran atención al detalle y en tiempo récord.",
    rating: 5
  },
  {
    name: "Laura Martínez",
    position: "Fundadora - EcoStore",
    image: "https://source.unsplash.com/random/100x100/?woman",
    text: "El e-commerce que desarrolló superó todas nuestras expectativas. Las ventas aumentaron un 180% en los primeros 3 meses.",
    rating: 5
  },
  {
    name: "Miguel Sánchez",
    position: "Director de Marketing",
    image: "https://source.unsplash.com/random/100x100/?man2",
    text: "Su capacidad para entender nuestras necesidades y traducirlas en una interfaz intuitiva es impresionante. Altamente recomendado.",
    rating: 5
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('testimonialsGrid');

  testimonials.forEach(testimonial => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <p class="testimonial-text">"${testimonial.text}"</p>
      
      <div class="testimonial-author">
        <img src="${testimonial.image}" alt="${testimonial.name}">
        <div class="testimonial-author-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.position}</p>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
});