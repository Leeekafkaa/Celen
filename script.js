document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade In Animation for Service Descriptions
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("fade-in");
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service p').forEach(description => {
        fadeInObserver.observe(description);
    });
});
