// ADVANCED SUITE SLIDER
let slideIdx = 0;
function slideSuite(dir) {
    const track = document.getElementById('suite-slider');
    const cardWidth = document.querySelector('.suite-card').clientWidth + 24;
    slideIdx += dir;
    if(slideIdx < 0) slideIdx = 7;
    if(slideIdx > 7) slideIdx = 0;
    track.style.transform = `translateX(-${slideIdx * cardWidth}px)`;
}

// OFFSET CALC
function calculateOffset() {
    const val = document.getElementById('calcInput').value;
    const out = document.getElementById('calcOutput');
    if(val > 0) {
        out.innerText = `$${(val * 0.30).toFixed(2)} M`;
    } else {
        out.innerText = "$0.00 M";
    }
}

// FORM UPLINK FEEDBACK
document.querySelector('.terminal-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerText = "TRANSMITTING DATA...";
    setTimeout(() => {
        alert("SECURE CONNECTION ESTABLISHED. Your strategic mission brief has been received. Our leadership will respond within 24 hours.");
        btn.innerText = "ESTABLISH CONNECTION";
        e.target.reset();
    }, 1500);
});
