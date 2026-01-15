// SLIDER LOGIC
let currentSlide = 0;
const slider = document.getElementById('slider');
const totalSlides = 10;

function slideNext() {
    const screenWidth = window.innerWidth;
    let visibleSlides = screenWidth < 768 ? 1 : (screenWidth < 992 ? 2 : 3);
    if (currentSlide < totalSlides - visibleSlides) currentSlide++;
    else currentSlide = 0;
    updateSlider();
}

function slidePrev() {
    const screenWidth = window.innerWidth;
    let visibleSlides = screenWidth < 768 ? 1 : (screenWidth < 992 ? 2 : 3);
    if (currentSlide > 0) currentSlide--;
    else currentSlide = totalSlides - visibleSlides;
    updateSlider();
}

function updateSlider() {
    const slide = document.querySelector('.glass-slide');
    if(!slide) return;
    const width = slide.clientWidth + 20;
    slider.style.transform = `translateX(-${currentSlide * width}px)`;
}
window.addEventListener('resize', updateSlider);

// OFFSET CALCULATOR
function runOffsetCalc() {
    const input = document.getElementById('contractVal').value;
    const output = document.getElementById('offsetResult');
    if(input > 0) {
        output.innerText = `$${(input * 0.30).toFixed(2)} M`;
        output.style.textShadow = "0 0 20px rgba(255, 215, 0, 0.8)";
        setTimeout(() => output.style.textShadow = "none", 500);
    } else {
        output.innerText = "$0.00 M";
    }
}

// BOOKING TABS LOGIC
const planData = {
    "Policy Consultation": {
        title: "Policy Consultation Package",
        desc: "Strategic guidance on defense acquisition policy and comprehensive analysis.",
        bullets: ["✓ Policy advisory on DAP 2020", "✓ Guidance on DPM procedures", "✓ Consultation on offset discharge"]
    },
    "Regulatory Consultation": {
        title: "Regulatory & Compliance Suite",
        desc: "End-to-end support for licensing and institutional regulatory frameworks.",
        bullets: ["✓ Industrial Licensing & Ex/Im docs", "✓ ITAR/EAR compliance readiness", "✓ JV facilitation support"]
    },
    "Market Intelligence": {
        title: "Market Intelligence & Research",
        desc: "Deep-dive financial and technical analysis for the Indian defense market.",
        bullets: ["✓ Capability gap analysis", "✓ Competitor pricing benchmarks", "✓ iDEX/TDF proposal mentoring"]
    }
};

const tabs = document.querySelectorAll('.plan-tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const plan = tab.getAttribute('data-plan');
        document.getElementById('autoPlan').value = plan;
        
        const contentBox = document.getElementById('planContent');
        contentBox.style.opacity = '0';
        setTimeout(() => {
            document.getElementById('planTitle').innerText = planData[plan].title;
            document.getElementById('planDesc').innerText = planData[plan].desc;
            document.getElementById('planBullets').innerHTML = planData[plan].bullets.map(b => `<li>${b}</li>`).join('');
            contentBox.style.opacity = '1';
        }, 200);
    });
});

// SCROLL REVEAL
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');

    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active');
    });
}
window.addEventListener('scroll', revealElements);
window.addEventListener('load', () => {
    revealElements();
    document.querySelectorAll('.pillar-box, .glass-slide').forEach((c, i) => c.style.transitionDelay = `${i * 0.1}s`);
});

// PILLAR CLICK
document.querySelectorAll('.pillar-box').forEach(box => {
    box.addEventListener('click', function() {
        document.querySelectorAll('.pillar-box').forEach(b => b.classList.remove('active-pillar'));
        this.classList.add('active-pillar');
    });
});
