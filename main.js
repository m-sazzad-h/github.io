/**
 * main.js - Portfolio Scripts
 * DEBUG FRIENDLY: Clear section comments, no minification
 */

// ==================== Typed Role Switcher ====================
const roles = [
  "ML Engineer",
  "AI Builder",
  "Competitive Programmer",
  "Founder @ Qarena"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let typedElement = null;

function typeRole() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typedElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 40;
  } else {
    typedElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    typingSpeed = 2000; // pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 500; // pause before next
  }

  setTimeout(typeRole, typingSpeed);
}

// ==================== Mobile Menu Toggle ====================
function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.toggle('active');
}

// ==================== Initialization ====================
document.addEventListener('DOMContentLoaded', () => {
  // Typed role
  typedElement = document.getElementById('typed-role');
  if (typedElement) {
    typedElement.textContent = '';
    setTimeout(typeRole, 500);
  }
});
