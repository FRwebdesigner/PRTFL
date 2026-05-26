// skills.js

const skillsData = {
  frontend: [
    { name: "HTML5", level: 95, icon: "fab fa-html5" },
    { name: "CSS3", level: 90, icon: "fab fa-css3-alt" },
    { name: "JavaScript", level: 88, icon: "fab fa-js" },
    { name: "React", level: 85, icon: "fab fa-react" },
    { name: "Tailwind CSS", level: 90, icon: "fas fa-wind" },
  ],
  backend: [
    { name: "Node.js", level: 80, icon: "fab fa-node-js" },
    { name: "Express", level: 75, icon: "fas fa-server" },
    { name: "MongoDB", level: 78, icon: "fas fa-database" },
    { name: "MySQL", level: 70, icon: "fas fa-database" },
  ],
  design: [
    { name: "Figma", level: 85, icon: "fas fa-pencil-ruler" },
    { name: "Adobe XD", level: 75, icon: "fas fa-palette" },
    { name: "Git", level: 90, icon: "fab fa-git-alt" },
    { name: "VS Code", level: 95, icon: "fas fa-code" },
  ]
};

document.addEventListener('DOMContentLoaded', () => {

  // Renderizar habilidades Frontend
  const frontendGrid = document.getElementById('frontendSkills');
  skillsData.frontend.forEach(skill => {
    frontendGrid.innerHTML += createSkillCard(skill);
  });

  // Renderizar Backend
  const backendGrid = document.getElementById('backendSkills');
  skillsData.backend.forEach(skill => {
    backendGrid.innerHTML += createSkillCard(skill);
  });

  // Renderizar Diseño
  const designGrid = document.getElementById('designSkills');
  skillsData.design.forEach(skill => {
    designGrid.innerHTML += createSkillCard(skill);
  });

  // Animación de progreso
  setTimeout(() => {
    document.querySelectorAll('.progress').forEach(bar => {
      bar.style.width = bar.getAttribute('data-width');
    });
  }, 800);
});

function createSkillCard(skill) {
  return `
    <div class="skill-card">
      <i class="${skill.icon}"></i>
      <h3>${skill.name}</h3>
      <div class="progress-bar">
        <div class="progress" data-width="${skill.level}%"></div>
      </div>
      <small>${skill.level}%</small>
    </div>
  `;
}