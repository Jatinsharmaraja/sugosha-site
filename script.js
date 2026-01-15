// ADVANCED SUITE SLIDER LOGIC
let currentSlide = 0;
const slider = document.getElementById('slider');
const totalSlides = 10; 

function slideNext() {
    const screenWidth = window.innerWidth;
    let visibleSlides = 3;
    if(screenWidth < 768) visibleSlides = 1;
    else if(screenWidth < 992) visibleSlides = 2;

    if (currentSlide < totalSlides - visibleSlides) {
        currentSlide++;
    } else {
        currentSlide = 0; // Return to start
    }
    updateSlider();
}

function slidePrev() {
    const screenWidth = window.innerWidth;
    let visibleSlides = 3;
    if(screenWidth < 768) visibleSlides = 1;
    else if(screenWidth < 992) visibleSlides = 2;

    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - visibleSlides; // Jump to end
    }
    updateSlider();
}

function updateSlider() {
    // Gap is 20px based on the CSS 'gap' property
    const width = document.querySelector('.glass-slide').clientWidth + 20;
    slider.style.transform = `translateX(-${currentSlide * width}px)`;
}

window.addEventListener('resize', updateSlider);

// OFFSET CALCULATOR
function runOffsetCalc() {
    const input = document.getElementById('contractVal').value;
    const output = document.getElementById('offsetResult');
    if(input > 0) {
        const res = input * 0.30;
        output.innerText = `$${res.toFixed(2)} M`;
    } else {
        output.innerText = "$0.00 M";
    }
}

// FORM SUBMISSION
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("SECURE UPLINK ESTABLISHED. Your inquiry is being reviewed by our strategic leadership board.");
    e.target.reset();
});

// --- ENHANCEMENT: SCROLL REVEAL & NAV LOGIC ---
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    const nav = document.querySelector('.glass-nav');
    
    // Nav Background Change
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Fade-in sections on scroll
    reveals.forEach(element => {
        let windowHeight = window.innerHeight;
        let revealTop = element.getBoundingClientRect().top;
        let revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);
