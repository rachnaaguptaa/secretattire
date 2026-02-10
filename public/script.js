// ============================================
// Secret Attire - Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  initMobileMenu();
  
  // Smooth Scroll
  initSmoothScroll();
  
  // Scroll Reveal Animations
  initScrollReveal();
  
  // Navbar Scroll Effect
  initNavbarScroll();
});

// ============================================
// Mobile Menu
// ============================================

function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Animate hamburger icon
      const spans = menuBtn.querySelectorAll('span');
      if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
    
    // Close menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        const spans = menuBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }
}

// ============================================
// Smooth Scroll
// ============================================

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const navHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = target.offsetTop - navHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// ============================================
// Scroll Reveal Animations
// ============================================

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if (revealElements.length === 0) return;
  
  const revealOnScroll = function() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    revealElements.forEach(function(element) {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  };
  
  // Initial check
  revealOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', revealOnScroll, { passive: true });
}

// ============================================
// Navbar Scroll Effect
// ============================================

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  if (!navbar) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 10) {
      navbar.style.boxShadow = '0 4px 20px -4px rgba(194, 118, 133, 0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  }, { passive: true });
}

// ============================================
// Counter Animation (for stats)
// ============================================

function animateCounter(element, target, suffix = '') {
  const duration = 2000;
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(function() {
    current += increment;
    
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    
    if (target >= 100000) {
      element.textContent = Math.floor(current / 100000) + ',00,000+';
    } else if (target >= 1000) {
      element.textContent = Math.floor(current / 1000) + ',000+';
    } else {
      element.textContent = Math.floor(current) + suffix;
    }
  }, 16);
}

// ============================================
// Form Validation (if needed)
// ============================================

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[6-9]\d{9}$/;
  return re.test(phone);
}

// ============================================
// WhatsApp Integration
// ============================================

function openWhatsApp(message) {
  const phone = '919034828632';
  const encodedMessage = encodeURIComponent(message || 'Hi, I am interested in Secret Attire!');
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
}

// ============================================
// Ideabaaz Slideshow (Auto-rotate every 5s)
// ============================================

let currentSlide = 0;
let slideInterval;

function initSlideshow() {
  const slides = document.querySelectorAll('#ideabaazSlideshow .slide');
  if (slides.length === 0) return;

  slideInterval = setInterval(function() {
    goToSlide((currentSlide + 1) % slides.length);
  }, 5000);
}

function goToSlide(index) {
  const slides = document.querySelectorAll('#ideabaazSlideshow .slide');
  const dots = document.querySelectorAll('#slideshowDots .dot');
  if (slides.length === 0) return;

  slides[currentSlide].classList.remove('active');
  if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

  currentSlide = index;

  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');

  // Reset interval
  clearInterval(slideInterval);
  slideInterval = setInterval(function() {
    goToSlide((currentSlide + 1) % slides.length);
  }, 5000);
}

// Init slideshow on load
document.addEventListener('DOMContentLoaded', function() {
  initSlideshow();
});
