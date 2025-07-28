import { CountUp } from 'countup.js';
import Swiper from 'swiper/bundle';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 700,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    const navbar = document.getElementById('navbar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Mobile menu toggle
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });

    // Initialize CountUp animations
    new CountUp('private-rooms-counter', 14, { enableScrollSpy: true });
    new CountUp('event-spaces-counter', 10, { enableScrollSpy: true });
    new CountUp('creative-studios-counter', 9, { enableScrollSpy: true });

    new Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.testimonial-next-btn',
          prevEl: '.testimonial-prev-btn',
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
    });
}); 