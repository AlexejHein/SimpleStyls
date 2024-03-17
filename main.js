// JavaScript
function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
}
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Automatischer Wechsel alle 2 Sekunden
setInterval(showNextSlide, 4000);

// Manuelle Steuerung (Optional)
document.querySelector('.next').addEventListener('click', showNextSlide);

document.querySelector('.prev').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
});

