const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const heroContent = document.querySelector('.hero-content');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Hero entrance animation
window.addEventListener('load', () => {
  heroContent.classList.add('animate');
});

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

reveals.forEach(el => observer.observe(el));

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const cookiePopup = document.getElementById('cookiePopup');
const cookieAccept = document.getElementById('cookieAccept');

// Show popup after 3 seconds if not accepted
window.addEventListener('load', () => {
  const accepted = localStorage.getItem('cookiesAccepted');

  if (!accepted) {
    setTimeout(() => {
      cookiePopup.classList.add('show');
    }, 3000);
  }
});

// Accept cookies
cookieAccept.addEventListener('click', () => {
  localStorage.setItem('cookiesAccepted', 'true');
  cookiePopup.classList.remove('show');
});

  const cards = document.querySelectorAll('[data-card]');

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      cards.forEach((c) => {
        if (c !== card) c.classList.remove('is-active');
      });

      card.classList.toggle('is-active');
    });
  });

const videos = document.querySelectorAll('.work-card video');

const videobserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  },
  { threshold: 0.4 }
);

videos.forEach(video => videobserver.observe(video));

const track = document.querySelector('.testimonial-track');
const prevBtn = document.querySelector('.testimonial-arrow.left');
const nextBtn = document.querySelector('.testimonial-arrow.right');

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % cards.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + cards.length) % cards.length;
  updateCarousel();
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const button = item.querySelector('.faq-question');

  button.addEventListener('click', () => {
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove('active');
    });

    item.classList.toggle('active');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
