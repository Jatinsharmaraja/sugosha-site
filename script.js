/* ==========================================================================
   SUGOSHA COMMAND LOGIC v11.0
   Author: AI Sovereign Engineer
   Logic: 10-Card Slider, Offset Engine, Mouse-Tracking, Form Encryption
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. OFFSET ENGINE: REAL-TIME CALCULATION
    const calcInput = document.getElementById('offset-in');
    const calcOutput = document.getElementById('offset-out');

    window.runOffsetLogic = () => {
        const value = parseFloat(calcInput.value);
        if (!isNaN(value) && value > 0) {
            const obligation = value * 0.30; // 30% Obligation Base
            calcOutput.innerText = `$ ${obligation.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })} M`;
            calcOutput.style.color = "#FFD700"; // Radiant Gold
        } else {
            calcOutput.innerText = "$ 000.00 M";
            calcOutput.style.color = "rgba(255,255,255,0.3)";
        }
    };

    // 2. STRATEGIC SLIDER: 10 CARDS (3 VIEW)
    let sliderPos = 0;
    const track = document.getElementById('strategic-track');
    const indicator = document.getElementById('slide-num');
    const totalCards = 10;
    const cardsPerView = 3;

    window.moveSuite = (direction) => {
        sliderPos += direction;

        // Loop Logic
        if (sliderPos < 0) sliderPos = totalCards - cardsPerView;
        if (sliderPos > totalCards - cardsPerView) sliderPos = 0;

        const cardWidth = document.querySelector('.glass-solution-card').offsetWidth + 30;
        track.style.transform = `translateX(-${sliderPos * cardWidth}px)`;

        // Update Counter
        const currentCount = String(sliderPos + 1).padStart(2, '0');
        const maxCount = String(totalCards - cardsPerView + 1).padStart(2, '0');
        indicator.innerText = `${currentCount} / ${maxCount}`;
    };

    // 3. RADIANT LIGHTING: MOUSE TRACKING
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        // Update Tactical Grid Glow
        const grid = document.querySelector('.tactical-hud-lines');
        grid.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(212, 175, 55, 0.1) 0%, transparent 40%)`;
        
        // Move Radiant Flare
        const flare = document.querySelector('.master-radiant-glow');
        flare.style.transform = `translate(${(x - 50) * 0.2}px, ${(y - 50) * 0.2}px)`;
    });

    // 4. SECURE FORM SIMULATION
    const missionForm = document.getElementById('secure-form');
    if (missionForm) {
        missionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = missionForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = "TRANSMITTING_ENCRYPTED_SIGNALS...";
            btn.disabled = true;

            setTimeout(() => {
                alert("STRATEGIC CONNECTION SUCCESSFUL: Your briefing request has been securely received by the Board of Advisors. Expect a secure response within 24 hours.");
                btn.innerText = originalText;
                btn.disabled = false;
                missionForm.reset();
            }, 2000);
        });
    }

    // 5. PARALLAX SCROLL FOR MODULES
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const drone = document.querySelector('.drone-model');
        if (drone) {
            drone.style.transform = `translateY(${scrolled * 0.05}px) rotate(${scrolled * 0.01}deg)`;
        }
        
        const navbar = document.getElementById('navbar');
        if (scrolled > 100) {
            navbar.style.padding = "15px 0";
            navbar.style.boxShadow = "0 10px 40px rgba(0, 48, 135, 0.1)";
        } else {
            navbar.style.padding = "25px 0";
            navbar.style.boxShadow = "none";
        }
    });

    console.log("SUGOSHA_OPERATIONAL_SYSTEM: V11_STABLE");
});
