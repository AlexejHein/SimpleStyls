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


const navCircle = document.querySelector('.nav-circle');
const navItems = document.querySelector('.nav-items');
let isOpen = false; // Zustand des Menüs

navCircle.addEventListener('click', () => {
    const items = document.querySelectorAll('.nav-items li');
    const radius = 100; // Radius, in dem die Menüpunkte angeordnet werden sollen

    if (!isOpen) {
        navItems.style.display = 'flex'; // Menü anzeigen
        items.forEach((item, index, array) => {
            const angle = (index / array.length) * (2 * Math.PI); // Winkel für jeden Menüpunkt
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            item.style.transform = `translate(${x}px, ${y}px)`;
            item.style.opacity = 1;
        });
        isOpen = true;
    } else {
        items.forEach((item) => {
            item.style.transform = `translate(0, 0)`;
            item.style.opacity = 0;
        });
        setTimeout(() => {
            navItems.style.display = 'none';
        }, 500); // Warten bis die Animation abgeschlossen ist
        isOpen = false;
    }
});



