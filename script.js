// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

const elements = document.querySelectorAll(
    ".section-heading, .about-grid, .skill-card, .project-card, .timeline-item"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                // Stop observing after the animation happens
                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


// Add hidden state
elements.forEach((element, index) => {

    element.classList.add("hidden");

    // Slight delay between elements
    element.style.transitionDelay = `${(index % 4) * 0.08}s`;

    observer.observe(element);

});