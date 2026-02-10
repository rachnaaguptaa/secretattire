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
  
  // Hero Carousel
  initHeroCarousel();
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
// Hero Carousel
// ============================================

function initHeroCarousel() {
  const carousel = document.getElementById('heroCarousel');
  if (!carousel) return;
  
  const items = carousel.querySelectorAll('.hero-carousel-item');
  const indicators = carousel.querySelectorAll('.hero-carousel-indicator');
  let currentIndex = 0;
  
  // Function to show specific image
  function showImage(index) {
    // Remove active class from all items and indicators
    items.forEach(item => item.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current item and indicator
    if (items[index]) {
      items[index].classList.add('active');
    }
    if (indicators[index]) {
      indicators[index].classList.add('active');
    }
    
    currentIndex = index;
  }
  
  // Auto-rotate every 5 seconds
  let carouselInterval = setInterval(function() {
    currentIndex = (currentIndex + 1) % items.length;
    showImage(currentIndex);
  }, 5000);
  
  // Click on indicator to jump to specific image
  indicators.forEach(function(indicator, index) {
    indicator.addEventListener('click', function(e) {
      e.stopPropagation();
      showImage(index);
      // Reset interval
      clearInterval(carouselInterval);
      carouselInterval = setInterval(function() {
        currentIndex = (currentIndex + 1) % items.length;
        showImage(currentIndex);
      }, 5000);
    });
  });
  
  // Click on carousel to open product link
  carousel.addEventListener('click', function() {
    const activeItem = carousel.querySelector('.hero-carousel-item.active');
    if (activeItem) {
      const productLink = activeItem.getAttribute('data-product-link');
      if (productLink) {
        window.open(productLink, '_blank', 'noopener,noreferrer');
      }
    }
  });
  
  // Pause on hover (optional)
  carousel.addEventListener('mouseenter', function() {
    clearInterval(carouselInterval);
  });
  
  carousel.addEventListener('mouseleave', function() {
    carouselInterval = setInterval(function() {
      currentIndex = (currentIndex + 1) % items.length;
      showImage(currentIndex);
    }, 5000);
  });
}
