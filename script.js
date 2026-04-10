document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const loaderText = document.querySelector('.loader-text');
    const header = document.getElementById('main-header');

    // 1. Initial State
    // Slightly delay the loader text reveal for a premium feel
    setTimeout(() => {
        if (loaderText) loaderText.classList.add('revealed');
    }, 400);

    // 2. Resilient Loader Fix (5-second fallback)
    const hideLoader = () => {
        if (loader.style.display !== 'none') {
            loader.style.transition = 'opacity 1s ease-in-out';
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                // Trigger initial check for visible elements
                revealElements();
            }, 1000);
        }
    };

    const loaderFallback = setTimeout(hideLoader, 5000);

    window.addEventListener('load', () => {
        clearTimeout(loaderFallback);
        // Small delay so the "AnEshaEdit" text can be read
        setTimeout(hideLoader, 1500);
    });

    // 3. High-Performance Scroll Reveal (Intersection Observer)
    const revealElements = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Stagger any grid items within the section
                    const items = entry.target.querySelectorAll('.grid-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 200); // Stagger effect
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    };

    // 4. Header Dynamic Behavior
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 5. Texture Index Interaction (Preview only)
    document.querySelectorAll('.index-card').forEach(card => {
        card.addEventListener('click', function() {
            const material = this.querySelector('h3').innerText;
            console.log(`Exploring material: ${material}`);
            // Future feature: reveal specific items for this material
        });
    });

    // 6. Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
