// ADVANCED SUITE SLIDER
let slidePos = 0;
function moveSlide(dir) {
    const track = document.getElementById('strategicSlider');
    const width = document.querySelector('.glass-slide').clientWidth + 24;
    slidePos += dir;
    if(slidePos < 0) slidePos = 7;
    if(slidePos > 7) slidePos = 0;
    track.style.transform = `translateX(-${slidePos * width}px)`;
}

// OFFSET CALCULATOR
function runOffsetCalc() {
    const val = document.getElementById('calcVal').value;
    const out = document.getElementById('calcOut');
    if(val > 0) {
        out.innerText = `$${(val * 0.30).toFixed(2)} M`;
    } else {
        out.innerText = "$0.00 M";
    }
}

// SECURE FORM FEEDBACK
document.querySelector('.terminal-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerText = "TRANSMITTING SECURELY...";
    setTimeout(() => {
        alert("SECURE STRATEGIC CONNECTION ESTABLISHED. Our board will respond via encrypted channels within 24 hours.");
        btn.innerText = "ESTABLISH CONNECTION";
        e.target.reset();
    }, 1500);
});
