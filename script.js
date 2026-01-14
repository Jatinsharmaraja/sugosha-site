// OFFSET CALCULATOR LOGIC
function runOffsetCalc() {
    const input = document.getElementById('contractVal').value;
    const output = document.getElementById('offsetOutput');
    if (input > 0) {
        const result = input * 0.30; // 30% Obligation
        output.innerText = `$${result.toFixed(2)} M`;
        output.style.color = "#FFD700"; // Glow Gold
    } else {
        output.innerText = "$0.00 M";
    }
}

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FORM SUBMISSION FEEDBACK
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.innerText = "UPLINKING SECURELY...";
        setTimeout(() => {
            alert("SECURE TRANSMISSION SUCCESSFUL: Your strategic briefing request has been received. Our leadership board will respond within 24 hours.");
            btn.innerText = "INITIALIZE UPLINK";
            contactForm.reset();
        }, 1500);
    });
}
