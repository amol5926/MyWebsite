const slides = document.querySelectorAll('.slideshow-container img');
const dots = document.querySelectorAll('.dot');
let slideIndex = 0;
document.body.style.zoom = "125%"

showSlides();

setInterval(() => {
    showSlides();
}, 8000);

function showSlides() {
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides and remove the active class from all dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
        dots[i].classList.remove('active');
    }

    // Show the current slide and add the active class to the corresponding dot
    slides[slideIndex].style.opacity = 1;
    dots[slideIndex].classList.add('active');

    // Change the color of the header text
    const header = document.querySelector('.header');
    if (slideIndex === 0) {
        header.style.color = 'white';
    } else if (slideIndex === 1) {
        header.style.color = 'gray';
    } else {
        header.style.color = 'gray';
    }

    // Increment the slide index
    slideIndex++;
}

