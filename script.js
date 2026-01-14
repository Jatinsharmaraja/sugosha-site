// STRATEGIC OFFSET CALCULATOR
function runOffsetCalc() {
    const val = document.getElementById('contractVal').value;
    const res = document.getElementById('offsetResult');
    if(val > 0) {
        const calculation = val * 0.30; // 30% Obligation
        res.innerText = `$${calculation.toFixed(2)} M`;
        res.style.color = "#D4AF37";
    } else {
        res.innerText = "$0.00 M";
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

// SECURE FORM FEEDBACK
const form = document.querySelector('.contact-form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.innerText = "TRANSMITTING SECURELY...";
        setTimeout(() => {
            alert("SECURE UPLINK ESTABLISHED: Your strategic inquiry has been received by our leadership team. We will respond within 24 hours.");
            btn.innerText = "SUBMIT INQUIRY";
            form.reset();
        }, 1500);
    });
}
