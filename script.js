// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FORM FEEDBACK
document.querySelector('.glass-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Inquiry Logged Securely. Our strategic advisors will contact you within 24 hours.");
    e.target.reset();
});
