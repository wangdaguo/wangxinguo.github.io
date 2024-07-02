let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-image').length;

document.getElementById('total-slides').innerText = totalSlides;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    const carouselContainer = document.querySelector('.carousel-container');
    
    // Remove transition effect
    carouselContainer.style.transition = 'none';

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;

    // Force reflow to reset transition effect
    carouselContainer.offsetHeight; 

    // Restore transition effect
    carouselContainer.style.transition = 'transform 0s ease';

    document.getElementById('current-slide').innerText = currentIndex + 1;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}
