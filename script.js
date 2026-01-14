// HUD SCANNER ANIMATION
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Subtly shift parallax elements based on mouse move
    const parallax = document.querySelector('.hero-parallax');
    if(parallax) {
        parallax.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    }
});

// SMOOTH SCROLL FOR NAVIGATION
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FORM ENCRYPTION FEEDBACK
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.innerText = "TRANSMITTING...";
        btn.disabled = true;
        
        setTimeout(() => {
            alert("SECURE UPLINK ESTABLISHED: Your strategic inquiry has been received. Our advisory team will respond via secure channels within 24 hours.");
            btn.innerText = "SUBMIT REQUEST";
            btn.disabled = false;
            contactForm.reset();
        }, 1500);
    });
}

// BENTO ANIMATION ON SCROLL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.bento-box, .pillar-module, .intel-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(el);
});

// Helper for visible class
const style = document.createElement('style');
style.textContent = `
    .visible { opacity: 1 !important; transform: translateY(0) !important; }
`;
document.head.append(style);
