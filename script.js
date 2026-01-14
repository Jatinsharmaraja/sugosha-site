// INTERACTIVE PROCUREMENT MAP LOGIC
const mapNodes = document.querySelectorAll('.map-node');
const display = document.getElementById('map-display');

mapNodes.forEach(node => {
    node.addEventListener('click', () => {
        // Reset active state
        mapNodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');
        
        // Change text
        const info = node.getAttribute('data-info');
        display.style.opacity = 0;
        setTimeout(() => {
            display.innerText = info;
            display.style.opacity = 1;
        }, 200);
    });
});

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// SECURE FORM FEEDBACK
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.innerText = "TRANSMITTING SECURELY...";
        setTimeout(() => {
            alert("UPLINK ESTABLISHED: Your strategic inquiry has been received. Our leadership will respond via secure channels within 24 hours.");
            btn.innerText = "SUBMIT SECURE REQUEST";
            contactForm.reset();
        }, 1500);
    });
}
