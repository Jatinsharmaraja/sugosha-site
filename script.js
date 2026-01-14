/* ==========================================================================
   SUGOSHA COMMAND LOGIC v10.0
   Author: AI Sovereign Engineer
   Features: Offset Calculation, Slider Control, Terminal Reveal, HUD Effects
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. STRATEGIC OFFSET ENGINE
    const offsetInput = document.getElementById('contract-val');
    const offsetDisplay = document.getElementById('offset-result');

    window.runOffsetEngine = () => {
        const value = parseFloat(offsetInput.value);
        if (!isNaN(value) && value > 0) {
            const obligation = value * 0.30; // DAP 2020 Standard 30%
            
            // Format to USD Currency style with M suffix
            offsetDisplay.innerText = `$ ${obligation.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })} M`;
            
            // Add strategic alert color
            offsetDisplay.style.color = "#FFD700";
        } else {
            offsetDisplay.innerText = "$ 0000.00 M";
            offsetDisplay.style.color = "rgba(255,255,255,0.2)";
        }
    };

    // 2. ADVANCED SUITE SLIDER CONTROLLER
    let suiteIndex = 0;
    const track = document.getElementById('strategic-track');
    const indicator = document.getElementById('slide-ind');
    const totalSlides = 10;
    const viewSize = 3;

    window.moveSuite = (direction) => {
        suiteIndex += direction;
        
        // Loop back logic
        if (suiteIndex < 0) suiteIndex = totalSlides - viewSize;
        if (suiteIndex > totalSlides - viewSize) suiteIndex = 0;
        
        const cardWidth = document.querySelector('.glass-solution-card').offsetWidth + 30;
        track.style.transform = `translateX(-${suiteIndex * cardWidth}px)`;
        
        // Update display counter
        indicator.innerText = `${String(suiteIndex + 1).padStart(2, '0')} / ${String(totalSlides - viewSize + 1).padStart(2, '0')}`;
    };

    // 3. SCROLL REVEAL & HUD PARALLAX
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const flare = document.getElementById('master-glow-flare');
        
        // Move background flare based on scroll
        flare.style.transform = `translateY(${scrolled * 0.3}px)`;
        
        // Fade in navbar shadow
        const nav = document.getElementById('main-nav');
        if (scrolled > 50) {
            nav.style.boxShadow = "0 10px 40px rgba(0,0,0,0.1)";
            nav.style.padding = "12px 0";
        } else {
            nav.style.boxShadow = "none";
            nav.style.padding = "20px 0";
        }
    });

    // 4. MISSION FORM TERMINAL LOGIC
    const missionForm = document.getElementById('mission-form');
    if (missionForm) {
        missionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = missionForm.querySelector('button');
            
            // Simulate Encrypted Transmission
            submitBtn.innerText = "TRANSMITTING_ENCRYPTED_PACKETS...";
            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.5";
            
            setTimeout(() => {
                alert("SECURE STRATEGIC UPLINK ESTABLISHED. Your inquiry has been received by the Sugosha Command Board. A response will be issued within 24 hours.");
                submitBtn.innerText = "CONNECTION_STABLE";
                missionForm.reset();
                setTimeout(() => {
                    submitBtn.innerText = "ESTABLISH CONNECTION";
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = "1";
                }, 3000);
            }, 2500);
        });
    }

    // 5. TACTICAL MOUSE GLOW (Radar Ping)
    document.addEventListener('mousemove', (e) => {
        const grid = document.querySelector('.tactical-hud-grid');
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        grid.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(212, 175, 55, 0.1) 0%, transparent 40%)`;
    });

    console.log("SUGOSHA_SYSTEM_CORE: ONLINE_AND_OPERATIONAL");
});
