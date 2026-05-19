const pageLoader = document.getElementById('pageLoader');
const cursor = document.getElementById('cursor');
const projectModal = document.getElementById('projectModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalInner = document.getElementById('modalInner');
const projectsGrid = document.getElementById('projectsGrid');
const testimonialSlider = document.getElementById('testimonialSlider');
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

const projects = [
  {
    title: 'NeuroFlow Studio',
    description: 'Modern AI business website with responsive design and animations.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
    tags: ['React', 'Tailwind', 'Responsive'],
    demo: 'https://neuroflow-studio.netlify.app/',
    link: 'https://neuroflow-studio.netlify.app/',
    details: 'A sleek AI business landing page designed for premium performance and immersive visual storytelling.'
  },
  {
    title: 'LuxeStyle Finder',
    description: 'Elegant luxury fashion discovery platform with premium UI and responsive shopping experience.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    tags: ['E-commerce', 'JavaScript', 'UI/UX'],
    demo: 'https://luxury-style-finder--robiuzzaman5.replit.app/',
    link: 'https://luxury-style-finder--robiuzzaman5.replit.app/',
    details: 'A luxury fashion experience with glimmering visuals and refined browsing interactions for premium shoppers.'
  },
  {
    title: 'Finora Dashboard',
    description: 'Modern analytics dashboard with premium UI, responsive layout, and interactive data visualization.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    tags: ['Dashboard', 'Node.js', 'Data'],
    demo: 'https://muntakinpr3.netlify.app/',
    link: 'https://muntakinpr3.netlify.app/',
    details: 'A powerful analytics dashboard with a futuristic interface and data-driven design for modern teams.'
  }
];

const testimonials = [
  {
    quote: 'Muntakin delivered a polished, futuristic website that truly feels premium. The animations and interface exceeded expectations.',
    name: 'Sara Mahmud',
    role: 'Creative Director'
  },
  {
    quote: 'A seamless experience from concept to launch. The attention to detail and motion design made our brand stand out instantly.',
    name: 'Rafi Khan',
    role: 'Founder'
  },
  {
    quote: 'Responsive, fast, and visually stunning. This portfolio looks like a top-tier agency website.',
    name: 'Ayesha Rahman',
    role: 'Product Manager'
  }
];

const heroPhrases = ['Full Stack Web Developer', 'Futuristic UI Architect', 'Premium Digital Experience Designer'];
let heroIndex = 0;
let typeIndex = 0;
let typingForward = true;
const typingElement = document.querySelector('.typing-text');

function typeHeroText() {
  const currentPhrase = heroPhrases[heroIndex];
  const substring = currentPhrase.slice(0, typeIndex);
  typingElement.textContent = substring;
  if (typingForward) {
    if (typeIndex < currentPhrase.length) {
      typeIndex++;
      setTimeout(typeHeroText, 100);
    } else {
      typingForward = false;
      setTimeout(typeHeroText, 1800);
    }
  } else {
    if (typeIndex > 0) {
      typeIndex--;
      setTimeout(typeHeroText, 50);
    } else {
      typingForward = true;
      heroIndex = (heroIndex + 1) % heroPhrases.length;
      setTimeout(typeHeroText, 300);
    }
  }
}

typeHeroText();

window.addEventListener('load', () => {
  pageLoader.style.opacity = '0';
  pageLoader.style.pointerEvents = 'none';
  setTimeout(() => pageLoader.style.display = 'none', 500);
});

window.addEventListener('mousemove', (event) => {
  cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});

const hoverables = document.querySelectorAll('a, button, .project-card, .service-card');
hoverables.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '30px';
    cursor.style.height = '30px';
    cursor.style.backgroundColor = 'rgba(59, 94, 255, 0.18)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '18px';
    cursor.style.height = '18px';
    cursor.style.backgroundColor = 'transparent';
  });
});

function buildProjects() {
  projectsGrid.innerHTML = projects.map((project, index) => `
    <article class="project-card" data-index="${index}">
      <div>
        <h4>${project.title}</h4>
        <p>${project.description}</p>
      </div>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
      <a class="btn btn-secondary" href="#" data-index="${index}">View Details</a>
    </article>
  `).join('');
}

function buildTestimonials() {
  testimonialSlider.innerHTML = testimonials.map(item => `
    <article class="testimonial-card">
      <p>"${item.quote}"</p>
      <div class="testimonial-author">
        <span class="author-avatar">${item.name.slice(0, 1)}</span>
        <div>
          <strong>${item.name}</strong>
          <p>${item.role}</p>
        </div>
      </div>
    </article>
  `).join('');
}

function openModal(index) {
  const project = projects[index];
  modalInner.innerHTML = `
    <div>
      <h2>${project.title}</h2>
      <p>${project.details}</p>
      <div class="modal-meta">
        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
      </div>
      <div class="modal-actions" style="margin-top:1.5rem; display:flex; gap:1rem; flex-wrap:wrap;">
        <a href="${project.demo}" target="_blank" class="btn btn-primary">Live Demo</a>
        <a href="${project.link}" target="_blank" class="btn btn-secondary">Project Link</a>
      </div>
    </div>
  `;
  projectModal.classList.add('open');
}

projectsGrid.addEventListener('click', (event) => {
  const target = event.target.closest('[data-index]');
  if (!target) return;
  event.preventDefault();
  const index = Number(target.dataset.index);
  openModal(index);
});

modalClose.addEventListener('click', () => projectModal.classList.remove('open'));
modalBackdrop.addEventListener('click', () => projectModal.classList.remove('open'));
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') projectModal.classList.remove('open');
});

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  formResponse.textContent = '';
  const payload = {
    name: contactForm.name.value,
    email: contactForm.email.value,
    phone: contactForm.phone.value,
    subject: contactForm.subject.value,
    message: contactForm.message.value,
  };

  try {
    const response = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (data.success) {
      formResponse.textContent = data.message;
      contactForm.reset();
    } else {
      formResponse.textContent = 'Unable to send message. Please try again.';
    }
  } catch (error) {
    formResponse.textContent = 'Network error. Please check your connection.';
  }
});

function initScrollReveal() {
  const sections = document.querySelectorAll('.section, .hero-content, .project-card, .service-card, .testimonial-card, .glass-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = '1';
        entry.target.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(25px)';
    observer.observe(section);
  });
}

buildProjects();
buildTestimonials();
initScrollReveal();
