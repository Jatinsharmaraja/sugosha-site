// INTERACTIVE DAP NAVIGATOR
const nodes = document.querySelectorAll('.node');
const display = document.getElementById('navigator-display');

nodes.forEach(node => {
    node.addEventListener('click', () => {
        // Reset active state
        nodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');
        
        // Change text content
        const info = node.getAttribute('data-info');
        display.style.opacity = 0;
        setTimeout(() => {
            display.innerText = info;
            display.style.opacity = 1;
        }, 200);
    });
});

// CONSULTATION FORM FEEDBACK
const form = document.getElementById('consultForm');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Strategic Inquiry Received. A Sugosha advisor will reach out within 24 hours under our NDA protocol.");
        form.reset();
    });
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
