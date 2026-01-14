// Interactive Timeline
const steps = document.querySelectorAll('.step');
const detailBox = document.getElementById('lifecycle-detail');

steps.forEach(step => {
    step.addEventListener('click', () => {
        // Change text based on step info
        const info = step.getAttribute('data-info');
        detailBox.innerHTML = `<h3 style="color:#2B549E; margin-bottom:10px;">Strategic Analysis</h3><p>${info}</p>`;
        
        // Visual Highlight
        steps.forEach(s => s.style.backgroundColor = 'transparent');
        step.style.backgroundColor = '#2B549E';
    });
});

// Form Smooth Reset
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Inquiry Sent Securely. Our analysts will contact you shortly.");
    e.target.reset();
});