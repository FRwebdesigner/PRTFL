// certifications.js

const certifications = [
  {
    id: 1,
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Coursera)",
    date: "2025",
    icon: "fab fa-meta",
    description: "Certificación profesional en desarrollo frontend con React, JavaScript y UX/UI.",
    link: "#"
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: "fab fa-aws",
    description: "Conocimientos fundamentales sobre servicios en la nube de AWS.",
    link: "#"
  },
  {
    id: 3,
    title: "Google UX Design Professional Certificate",
    issuer: "Google (Coursera)",
    date: "2024",
    icon: "fab fa-google",
    description: "Diseño de experiencias de usuario centradas en investigación y prototipado.",
    link: "#"
  },
  {
    id: 4,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    icon: "fab fa-js",
    description: "Dominio avanzado de JavaScript, algoritmos y estructuras de datos.",
    link: "#"
  },
  {
    id: 5,
    title: "React Developer Nanodegree",
    issuer: "Udacity",
    date: "2024",
    icon: "fab fa-react",
    description: "Desarrollo avanzado de aplicaciones con React y Redux.",
    link: "#"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('certificationsGrid');

  certifications.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'certification-card';
    card.innerHTML = `
      <i class="${cert.icon}"></i>
      <h3>${cert.title}</h3>
      <p class="issuer">${cert.issuer}</p>
      <p class="date">${cert.date}</p>
      <p>${cert.description}</p>
      <a href="${cert.link}" target="_blank" class="btn secondary">Ver Credencial</a>
    `;
    grid.appendChild(card);
  });

  console.log('%c✅ certifications.js cargado correctamente', 'color: #6366f1; font-weight: bold');
});