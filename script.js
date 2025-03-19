// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          const headerOffset = 80; // Adjust based on your header height
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
          });
      }
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      navLinks.classList.remove('active');
  });
});

// Your existing intersection observer code
const observerOptions = {
  root: null,
  rootMargin: '-50px',  // Adjusted for better trigger timing
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
      }
  });
}, observerOptions);

// Initialize animations
function initAnimations() {
  const elements = document.querySelectorAll('section, .project-card, .timeline-item');
  elements.forEach(element => {
      element.classList.add('animate-hidden');
      observer.observe(element);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  
  // Back to top button logic
  const backToTop = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          backToTop.classList.add('visible');
      } else {
          backToTop.classList.remove('visible');
      }
  });
  
  backToTop.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});