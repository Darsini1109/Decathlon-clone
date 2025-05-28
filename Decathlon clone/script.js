// Countdown Timer
function startCountdown(duration) {
  const timerElement = document.getElementById('timer');
  let remaining = duration;

  function updateTimer() {
    const hours = String(Math.floor(remaining / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, '0');
    const seconds = String(remaining % 60).padStart(2, '0');
    timerElement.textContent = `${hours} : ${minutes} : ${seconds}`;
    if (remaining > 0) remaining--;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

startCountdown(3600); // 1 hour

// Hero Slider
let heroSlides = document.querySelectorAll('.hero-slide');
let heroCurrent = 0;

const showHeroSlide = (index) => {
  heroSlides.forEach(slide => slide.classList.remove('active'));
  heroSlides[index].classList.add('active');
};

const leftNav = document.querySelector('.nav.left');
const rightNav = document.querySelector('.nav.right');

if (leftNav && rightNav) {
  leftNav.addEventListener('click', () => {
    heroCurrent = (heroCurrent - 1 + heroSlides.length) % heroSlides.length;
    showHeroSlide(heroCurrent);
  });

  rightNav.addEventListener('click', () => {
    heroCurrent = (heroCurrent + 1) % heroSlides.length;
    showHeroSlide(heroCurrent);
  });

  setInterval(() => {
    heroCurrent = (heroCurrent + 1) % heroSlides.length;
    showHeroSlide(heroCurrent);
  }, 5000);
}

// Slideshow (Decathlon categories slideshow)
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides(index) {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

// Initial display
showSlides(slideIndex);

// Auto-play for category slideshow
setInterval(() => {
  slideIndex++;
  showSlides(slideIndex);
}, 2000);
