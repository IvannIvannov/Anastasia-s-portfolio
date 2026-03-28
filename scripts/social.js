document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".fade-up");
    const counters = document.querySelectorAll(".stat-number");

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, index * 150); 
    });

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let current = 0;

        const duration = 1200; 
        const increment = target / (duration / 16);

        function updateCounter() {
            current += increment;

            if (current < target) {
                counter.innerText = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        }

        setTimeout(updateCounter, 600); 
    });

});