// ADVANCED SUITE SLIDER LOGIC
let currentSlide = 0;
const slider = document.getElementById('slider');
const totalSlides = 10; // Total strategic cards
const visibleSlides = 3;

function slideNext() {
    if (currentSlide < totalSlides - visibleSlides) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlider();
}

function slidePrev() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - visibleSlides;
    }
    updateSlider();
}

function updateSlider() {
    const width = document.querySelector('.glass-slide').clientWidth + 20;
    slider.style.transform = `translateX(-${currentSlide * width}px)`;
}

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

// FORM ENCRYPTION FEEDBACK
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("SECURE UPLINK ESTABLISHED. Your inquiry is being reviewed by our strategic leadership board.");
    e.target.reset();
});
