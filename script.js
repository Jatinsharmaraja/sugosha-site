// ============================================================
// 1. ADVANCED SUITE SLIDER LOGIC (PRESERVED)
// ============================================================
let currentSlide = 0;
const slider = document.getElementById('slider');
const totalSlides = 10; 

function slideNext() {
    const screenWidth = window.innerWidth;
    let visibleSlides = 3;
    if(screenWidth < 768) visibleSlides = 1;
    else if(screenWidth < 992) visibleSlides = 2;

    if (currentSlide < totalSlides - visibleSlides) {
        currentSlide++;
    } else {
        currentSlide = 0; 
    }
    updateSlider();
}

function slidePrev() {
    const screenWidth = window.innerWidth;
    let visibleSlides = 3;
    if(screenWidth < 768) visibleSlides = 1;
    else if(screenWidth < 992) visibleSlides = 2;

    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - visibleSlides; 
    }
    updateSlider();
}

function updateSlider() {
    const slideItem = document.querySelector('.glass-slide');
    if(!slideItem) return;
    const width = slideItem.clientWidth + 20;
    slider.style.transform = `translateX(-${currentSlide * width}px)`;
}

window.addEventListener('resize', updateSlider);

// ============================================================
// 2. OFFSET CALCULATOR (PRESERVED)
// ============================================================
function runOffsetCalc() {
    const input = document.getElementById('contractVal').value;
    const output = document.getElementById('offsetResult');
    if(input > 0) {
        const res = input * 0.30;
        output.innerText = `$${res.toFixed(2)} M`;
    } else {
        output.innerText = "$0.00 M";
    }
}

// ============================================================
// 3. FORM SUBMISSION (PRESERVED)
// ============================================================
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("SECURE UPLINK ESTABLISHED. Your inquiry is being reviewed by our strategic leadership board.");
        e.target.reset();
    });
}

// ============================================================
// 4. SCROLL REVEAL & NAV LOGIC (PRESERVED)
// ============================================================
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    const nav = document.querySelector('.glass-nav');
    
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    reveals.forEach(element => {
        let windowHeight = window.innerHeight;
        let revealTop = element.getBoundingClientRect().top;
        let revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// ============================================================
// 5. PILLAR INTERACTIVITY (PRESERVED)
// ============================================================
document.querySelectorAll('.pillar-box').forEach(box => {
    box.addEventListener('click', function() {
        document.querySelectorAll('.pillar-box').forEach(b => b.classList.remove('active-pillar'));
        this.classList.add('active-pillar');
    });
});

// ============================================================
// 6. CALCULATOR POLISH (PRESERVED)
// ============================================================
const calcInput = document.getElementById('contractVal');
const calcResult = document.getElementById('offsetResult');

if(calcInput) {
    calcInput.addEventListener('input', () => {
        calcResult.style.textShadow = "0 0 20px rgba(212, 175, 55, 0.6)";
        setTimeout(() => {
            calcResult.style.textShadow = "none";
        }, 500);
    });
}

// ============================================================
// 7. SMOOTH REVEAL STAGGERED (PRESERVED)
// ============================================================
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.pillar-box, .glass-slide');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});

// ============================================================
// 8. PREMIUM BOOKING TABS (PRESERVED)
// ============================================================
const planData = {
    "Policy Consultation": {
        title: "Policy Consultation Package",
        desc: "Strategic guidance on defense acquisition policy and basic media support with comprehensive analysis.",
        bullets: ["✓ Policy advisory on DAP 2020", "✓ Guidance on DPM procurement", "✓ Offset discharge & banking"]
    },
    "Regulatory Consultation": {
        title: "Regulatory & Compliance Suite",
        desc: "End-to-end support for licensing, export-import controls, and institutional regulatory frameworks.",
        bullets: ["✓ Industrial Licensing docs", "✓ ITAR/EAR audit readiness", "✓ JV Investment facilitation"]
    },
    "Market Intelligence": {
        title: "Market Intelligence & Research",
        desc: "Deep-dive financial and technical analysis for OEMs and startups looking to enter the Indian defense market.",
        bullets: ["✓ Capability gap analysis", "✓ Competitor pricing benchmarks", "✓ iDEX/TDF proposal mentoring"]
    }
};

const tabs = document.querySelectorAll('.plan-tab');
const autoPlanInput = document.getElementById('autoPlan');
const planTitle = document.getElementById('planTitle');
const planDesc = document.getElementById('planDesc');
const planBullets = document.getElementById('planBullets');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const selectedPlan = tab.getAttribute('data-plan');
        const data = planData[selectedPlan];
        if(autoPlanInput) autoPlanInput.value = selectedPlan;

        const contentBox = document.getElementById('planContent');
        if(contentBox) {
            contentBox.style.opacity = '0';
            setTimeout(() => {
                planTitle.innerText = data.title;
                planDesc.innerText = data.desc;
                planBullets.innerHTML = data.bullets.map(b => `<li>${b}</li>`).join('');
                contentBox.style.opacity = '1';
            }, 200);
        }
    });
});

// ============================================================
// 9. ELEGANT MAGAZINE FLOAT (PRESERVED)
// ============================================================
document.querySelectorAll('.pub-card-glass').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const elements = card.querySelectorAll('h4, p, .price, .btn-lightning');
        elements.forEach((el, i) => {
            el.style.transition = `all 0.4s ease ${i * 0.05}s`;
            el.style.transform = `translateY(-5px)`;
        });
    });

    card.addEventListener('mouseleave', () => {
        const elements = card.querySelectorAll('h4, p, .price, .btn-lightning');
        elements.forEach((el) => {
            el.style.transform = `translateY(0)`;
        });
    });
});

// ============================================================
// 10. MODIFIED INTERACTIVE LAYER: EXECUTIVE PARALLAX & CURSOR
// ============================================================

// A. ELEGANT EXECUTIVE CURSOR (MODIFIED FOR PREMIUM FEEL)
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    if(dot) {
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;
    }
    
    // Smooth outline trailing effect
    if(outline) {
        setTimeout(() => {
            outline.style.left = `${posX - 17}px`;
            outline.style.top = `${posY - 17}px`;
        }, 50);
    }
});

// B. ENHANCED MULTI-LAYER PARALLAX (MODIFIED FOR DEPTH)
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    // Move Background Flare
    const flare = document.querySelector('.golden-light-flare');
    if(flare) flare.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;

    // Move Blurred Periphery Figures (Tank & Missile)
    const tank = document.querySelector('.tank-blur');
    const missile = document.querySelector('.missile-blur');
    if(tank) tank.style.transform = `translate(${x * -0.8}px, ${y * -0.8}px) rotate(-10deg)`;
    if(missile) missile.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px) rotate(15deg)`;

    // Move Hero Text subtly
    const heroText = document.querySelector('.hero-text');
    if(heroText) heroText.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
});

// C. SECTION NAVIGATOR (PRESERVED)
const navSections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = "";
    navSections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 250) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((a) => {
        if (a.getAttribute("href").includes(current)) {
            a.style.color = "var(--gold)";
        } else {
            a.style.color = "var(--cobalt)";
        }
    });
});

// D. MAGNETIC BUTTONS & RIPPLES (PRESERVED)
const magButtons = document.querySelectorAll('.btn-gold-shine, .ctrl-btn');
magButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const bx = e.clientX - rect.left - rect.width / 2;
        const by = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${bx * 0.2}px, ${by * 0.2}px) translateY(-3px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = `translate(0, 0)`;
    });
});

document.querySelectorAll('.glass-slide, .pillar-box, .pub-card-glass').forEach(card => {
    card.addEventListener('mousedown', () => {
        card.style.transform = "scale(0.98)";
    });
    card.addEventListener('mouseup', () => {
        card.style.transform = "scale(1)";
    });
});

// --- ENHANCEMENT: ADVISOR CARD PARALLAX ---
document.querySelectorAll('.dossier-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Move the gold divider based on mouse position
        const divider = card.querySelector('.divider-gold');
        const moveX = (x / rect.width) * 20;
        divider.style.transform = `translateX(${moveX}px)`;
    });

    card.addEventListener('mouseleave', () => {
        const divider = card.querySelector('.divider-gold');
        divider.style.transform = `translateX(0)`;
    });
});

