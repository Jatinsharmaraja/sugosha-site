// INTERACTIVE ROADMAP LOGIC
const steps = document.querySelectorAll('.map-step');
const display = document.getElementById('lifecycle-display');

steps.forEach(step => {
    step.addEventListener('click', () => {
        // Reset classes
        steps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');
        
        // Update Content
        const content = step.getAttribute('data-content');
        display.style.opacity = 0;
        setTimeout(() => {
            display.innerText = content;
            display.style.opacity = 1;
        }, 200);
    });
});

// FORM SUBMISSION FEEDBACK
const contactForm = document.querySelector('.glass-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Strategic Inquiry Logged. A Sugosha Specialist will contact you under NDA protocol within 24 hours.");
        contactForm.reset();
    });
}
