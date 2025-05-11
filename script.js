// Main JavaScript file for BRSU website

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle functionality
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Slider functionality
  const sliderContainer = document.querySelector('.slider-container');
  const sliderSlides = document.querySelectorAll('.slider-slide');
  const sliderPrev = document.querySelector('.slider-prev');
  const sliderNext = document.querySelector('.slider-next');
  const sliderIndicators = document.querySelectorAll('.slider-indicator');
  
  if (sliderContainer && sliderSlides.length > 0) {
    let currentSlide = 0;
    const slideCount = sliderSlides.length;
    
    // Initialize slider
    updateSlider();
    
    // Set first indicator as active
    if (sliderIndicators.length > 0) {
      sliderIndicators[0].classList.add('active');
    }
    
    // Auto slide functionality
    let autoSlideInterval = setInterval(nextSlide, 5000);
    
    // Previous slide button
    if (sliderPrev) {
      sliderPrev.addEventListener('click', function() {
        prevSlide();
        resetAutoSlideInterval();
      });
    }
    
    // Next slide button
    if (sliderNext) {
      sliderNext.addEventListener('click', function() {
        nextSlide();
        resetAutoSlideInterval();
      });
    }
    
    // Indicator buttons
    sliderIndicators.forEach((indicator, index) => {
      indicator.addEventListener('click', function() {
        currentSlide = index;
        updateSlider();
        resetAutoSlideInterval();
      });
    });
    
    // Functions for slider
    function updateSlider() {
      sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
      
      // Update indicators
      sliderIndicators.forEach((indicator, index) => {
        if (index === currentSlide) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slideCount;
      updateSlider();
    }
    
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slideCount) % slideCount;
      updateSlider();
    }
    
    function resetAutoSlideInterval() {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(nextSlide, 5000);
    }
  }
  
  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // In a real application, you would send this data to a server
      console.log('Form submitted:', { name, email, subject, message });
      
      // Show success message
      if (formSuccess) {
        formSuccess.classList.remove('hidden');
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(function() {
          formSuccess.classList.add('hidden');
        }, 5000);
      }
    });
  }
  
  // Resource request form
  const resourceRequestForm = document.getElementById('resourceRequestForm');
  const resourceRequestSuccess = document.getElementById('resourceRequestSuccess');
  
  if (resourceRequestForm) {
    resourceRequestForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const resourceType = document.getElementById('resourceType').value;
      const resourceDescription = document.getElementById('resourceDescription').value;
      const email = document.getElementById('email').value;
      
      // In a real application, you would send this data to a server
      console.log('Resource request submitted:', { resourceType, resourceDescription, email });
      
      // Show success message
      if (resourceRequestSuccess) {
        resourceRequestSuccess.classList.remove('hidden');
        resourceRequestForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(function() {
          resourceRequestSuccess.classList.add('hidden');
        }, 5000);
      }
    });
  }
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add animation class to elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('fade-in');
      }
    });
  };
  
  // Run animation check on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Run once on page load
  animateOnScroll();
});