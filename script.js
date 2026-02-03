/* =========================
   Smooth Scroll for Nav Links
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/* =========================
   Simple Scroll Animation
========================= */
const sections = document.querySelectorAll('section');

const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealSection);


/* =========================
   Call Now Button Feedback
========================= */
const callButton = document.querySelector('.secondary-btn');

if (callButton) {
    callButton.addEventListener('click', () => {
        alert('Calling Traditional Coffee Club ☕');
    });
}
/* Scroll Reveal Effect */
section {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}

section.active {
    opacity: 1;
    transform: translateY(0);
}

.map-container {
    width: 100%;
    height: 280px;
    margin-top: 2rem;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

