document.addEventListener('DOMContentLoaded', () => {
    // Navigation Toggle
    const toggle = document.querySelector('.btn');
    const navbar = document.querySelector('.navd');
    let isNavOpen = false;

    toggle.addEventListener('click', () => {
        isNavOpen = !isNavOpen;
        if (isNavOpen) {
            navbar.classList.add('active');
            toggle.style.filter = 'invert(0)';
        } else {
            navbar.classList.remove('active');
            toggle.style.filter = 'invert(1)';
        }
    });

    // Close nav when clicking a link
    document.querySelectorAll('.nav-links').forEach(link => {
        link.addEventListener('click', () => {
            isNavOpen = false;
            navbar.classList.remove('active');
            toggle.style.filter = 'invert(1)';
        });
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Elements to observe
    const animatedElements = document.querySelectorAll(
        '.section-title, .edu-card, .edu-image, .skill-category'
    );

    animatedElements.forEach(el => observer.observe(el));

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


document.querySelector('.morelink').addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    setTimeout(() => {
        window.open(href, '_blank');
    }, 1100);
});

document.querySelectorAll('.viewmorebtn').forEach(button => {
    button.addEventListener('click', function() {
        const clickSound = new Audio('./img/click4.mp3');
        clickSound.volume = 0.8; // Adjust volume (0.0 to 1.0)
        clickSound.play();
    });
});