document.addEventListener('mousemove', (e) => {
    const radar = document.querySelector('.radar-bg');
    if(radar) {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        radar.style.transform = `translate(${x}px, ${y}px) translateY(-50%)`;
    }
});

// Intersection Observer for Orbs falling into place
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.service-orb-item').forEach(orb => {
    orb.style.opacity = "0";
    orb.style.transform = "translateY(50px)";
    orb.style.transition = "all 0.8s ease-out";
    observer.observe(orb);
});
