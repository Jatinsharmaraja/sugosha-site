// ADVANCED SUITE SLIDER LOGIC
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
        currentSlide = 0; // Return to start
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
        currentSlide = totalSlides - visibleSlides; // Jump to end
    }
    updateSlider();
}

function updateSlider() {
    // Gap is 20px based on the CSS 'gap' property
    const width = document.querySelector('.glass-slide').clientWidth + 20;
    slider.style.transform = `translateX(-${currentSlide * width}px)`;
}

window.addEventListener('resize', updateSlider);

// OFFSET CALCULATOR
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

// FORM SUBMISSION
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("SECURE UPLINK ESTABLISHED. Your inquiry is being reviewed by our strategic leadership board.");
    e.target.reset();
});

// --- ENHANCEMENT: SCROLL REVEAL & NAV LOGIC ---
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    const nav = document.querySelector('.glass-nav');
    
    // Nav Background Change
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Fade-in sections on scroll
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
// --- ENHANCEMENT: PILLAR INTERACTIVITY ---
// Allows users to click on a glassy pillar to highlight it (Active State)
document.querySelectorAll('.pillar-box').forEach(box => {
    box.addEventListener('click', function() {
        // Remove active class from all others
        document.querySelectorAll('.pillar-box').forEach(b => b.classList.remove('active-pillar'));
        // Add to the clicked one
        this.classList.add('active-pillar');
    });
});

// --- ENHANCEMENT: CALCULATOR POLISH ---
// Makes the result "glow" briefly when the value changes
const calcInput = document.getElementById('contractVal');
const calcResult = document.getElementById('offsetResult');

if(calcInput) {
    calcInput.addEventListener('input', () => {
        calcResult.style.textShadow = "0 0 20px rgba(255, 215, 0, 0.8)";
        setTimeout(() => {
            calcResult.style.textShadow = "none";
        }, 500);
    });
}

// --- ENHANCEMENT: SMOOTH REVEAL ADJUSTMENT ---
// Ensures that images and glass cards fade in with a slight delay for a "staggered" look
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.pillar-box, .glass-slide');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});
// --- ENHANCEMENT: PREMIUM BOOKING TABS LOGIC ---
const planData = {
    "Policy Consultation": {
        title: "Policy Consultation Package",
        desc: "Strategic guidance on defense acquisition policy and basic media support with comprehensive analysis.",
        bullets: ["✓ Policy advisory on DAP 2020 and earlier DPPs", "✓ Guidance on DPM and revenue procurement", "✓ Consultation on offset discharge and banking"]
    },
    "Regulatory Consultation": {
        title: "Regulatory & Compliance Suite",
        desc: "End-to-end support for licensing, export-import controls, and institutional regulatory frameworks.",
        bullets: ["✓ Industrial Licensing & Ex/Im documentation", "✓ ITAR/EAR compliance and audit readiness", "✓ JV and Investment facilitation support"]
    },
    "Market Intelligence": {
        title: "Market Intelligence & Research",
        desc: "Deep-dive financial and technical analysis for OEMs and startups looking to enter the Indian defense market.",
        bullets: ["✓ Capability gap analysis and forecasting", "✓ Competitor pricing benchmarks", "✓ iDEX/TDF proposal mentoring for startups"]
    }
};

const tabs = document.querySelectorAll('.plan-tab');
const autoPlanInput = document.getElementById('autoPlan');
const planTitle = document.getElementById('planTitle');
const planDesc = document.getElementById('planDesc');
const planBullets = document.getElementById('planBullets');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // 1. Update Active UI
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // 2. Get Data
        const selectedPlan = tab.getAttribute('data-plan');
        const data = planData[selectedPlan];

        // 3. Update Form (Automatic Feel)
        autoPlanInput.value = selectedPlan;

        // 4. Update Content with Smooth Transition
        const contentBox = document.getElementById('planContent');
        contentBox.style.opacity = '0';
        
        setTimeout(() => {
            planTitle.innerText = data.title;
            planDesc.innerText = data.desc;
            planBullets.innerHTML = data.bullets.map(b => `<li>${b}</li>`).join('');
            contentBox.style.opacity = '1';
        }, 200);
    });
});
// --- ENHANCEMENT: ELEGANT FLOAT INTERACTION ---
// Removes heavy rotation and adds a smooth "Lift" effect
document.querySelectorAll('.pub-card-glass').forEach(card => {
    card.addEventListener('mouseenter', () => {
        // We let CSS handle the main float, but we can add 
        // a staggered reveal to the children for extra elegance
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

/* ============================================================
   NEW ADDITION: PREMIUM TACTICAL UX LAYER (ZERO DELETIONS)
   ============================================================ */

// 1. DYNAMIC PARALLAX FLARE
// Makes the golden background light follow the mouse for 3D depth
document.addEventListener('mousemove', (e) => {
    const flare = document.querySelector('.golden-light-flare');
    if(!flare) return;
    const x = (e.clientX / window.innerWidth) * 30;
    const y = (e.clientY / window.innerHeight) * 30;
    flare.style.transform = `translate(${x}px, ${y}px)`;
});

// 2. SMOOTH SECTION NAVIGATOR
// Highlights the current section in the Nav Bar as you scroll
const navSections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = "";
    navSections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((a) => {
        a.classList.remove("active-nav"); // Uses CSS underline
        if (a.getAttribute("href").includes(current)) {
            a.style.color = "var(--gold)";
        } else {
            a.style.color = "var(--cobalt)";
        }
    });
});

// 3. MAGNETIC BUTTON FEEL
// Buttons subtly "pull" toward the cursor when hovering nearby
const magButtons = document.querySelectorAll('.btn-gold-shine, .ctrl-btn');
magButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) translateY(-3px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = `translate(0, 0)`;
    });
});

// 4. CLICK RIPPLE EFFECT
// Adds a subtle tactical pulse when any glassy element is clicked
document.querySelectorAll('.glass-slide, .pillar-box, .pub-card-glass').forEach(card => {
    card.addEventListener('mousedown', () => {
        card.style.transform = "scale(0.98)";
        card.style.transition = "0.1s";
    });
    card.addEventListener('mouseup', () => {
        card.style.transform = "scale(1)";
    });
});
// --- ENHANCEMENT: HUD & PARALLAX LOGIC ---
const crosshair = document.querySelector('.hud-crosshair');

document.addEventListener('mousemove', (e) => {
    // 1. Move Tactical Crosshair
    if(crosshair) {
        crosshair.style.opacity = "1";
        crosshair.style.left = e.clientX - 25 + 'px';
        crosshair.style.top = e.clientY - 25 + 'px';
    }
    
    // 2. Subtle Parallax for the Main Heading
    const heroContent = document.querySelector('.hero-text');
    if(heroContent) {
        const x = (window.innerWidth / 2 - e.pageX) / 60;
        const y = (window.innerHeight / 2 - e.pageY) / 60;
        heroContent.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
});

// Hide crosshair when leaving hero
document.querySelector('.hero').addEventListener('mouseleave', () => {
    if(crosshair) crosshair.style.opacity = "0";
});
