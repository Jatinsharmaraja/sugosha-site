// CUSTOM CURSOR LOGIC
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 3D LOGO TILT EFFECT
const logoStage = document.getElementById('logoStage');
document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    logoStage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// OFFSET CALCULATOR LOGIC
function calculateOffset() {
    const val = document.getElementById('projectValue').value;
    const result = document.getElementById('offsetResult');
    if(val > 0) {
        const offset = val * 0.3; // Standard 30% obligation
        result.innerText = `$${offset.toFixed(2)} M`;
        result.style.color = "#D4AF37";
    } else {
        result.innerText = "$0.00 M";
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
const form = document.querySelector('.elite-form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.innerText = "TRANSMITTING SECURELY...";
        setTimeout(() => {
            alert("UPLINK SUCCESSFUL: Your strategic inquiry has been received. Our leadership board will respond within 24 hours.");
            btn.innerText = "SUBMIT SECURE INQUIRY";
            form.reset();
        }, 1500);
    });
}
