// TIMELINE INTERACTIVITY
const timeSteps = document.querySelectorAll('.time-step');
const display = document.getElementById('timeline-display');

timeSteps.forEach(step => {
    step.addEventListener('click', () => {
        // Reset steps
        timeSteps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');
        
        // Change text
        const info = step.getAttribute('data-info');
        display.style.opacity = 0;
        setTimeout(() => {
            display.innerText = info;
            display.style.opacity = 1;
        }, 200);
    });
});

// STAT COUNTER ANIMATION
const counts = document.querySelectorAll('.count');
counts.forEach(count => {
    const target = parseInt(count.innerText);
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const updateCount = () => {
        start += increment;
        if(start < target) {
            count.innerText = Math.ceil(start);
            requestAnimationFrame(updateCount);
        } else {
            count.innerText = target;
        }
    };
    updateCount();
});

// FORM ENCRYPTION FEEDBACK
document.querySelector('.premium-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("SECURE UPLINK ESTABLISHED. Your strategic inquiry has been received. Our leadership team will respond within 24 hours.");
    e.target.reset();
});
