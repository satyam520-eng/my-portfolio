// Simple scroll reveal effect

const elements = document.querySelectorAll(
    ".section-heading, .about-grid, .skill-card, .project-card, .timeline-item"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.12
    }
);


elements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});