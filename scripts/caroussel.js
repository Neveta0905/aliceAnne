 let currentSlide = 0;
const slides = document.getElementById('carousel');
const totalSlides = slides.children.length;

function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}