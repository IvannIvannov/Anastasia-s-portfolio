document.addEventListener("DOMContentLoaded", function () {

    const testimonialCards = document.querySelectorAll(".testimonial-card");
    const testimonialDots = document.querySelectorAll(".testimonial-dots .dot");
    const prevReview = document.getElementById("prevReview");
    const nextReview = document.getElementById("nextReview");

    let currentReview = 0;
    let reviewInterval;

    function showReview(index) {
        testimonialCards.forEach((card, i) => {
            card.classList.toggle("active", i === index);
        });

        testimonialDots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        currentReview = index;
    }

    function nextReviewSlide() {
        const nextIndex = (currentReview + 1) % testimonialCards.length;
        showReview(nextIndex);
    }

    function prevReviewSlide() {
        const prevIndex = (currentReview - 1 + testimonialCards.length) % testimonialCards.length;
        showReview(prevIndex);
    }

    function startReviewAutoplay() {
        reviewInterval = setInterval(nextReviewSlide, 4500);
    }

    function resetReviewAutoplay() {
        clearInterval(reviewInterval);
        startReviewAutoplay();
    }

    if (nextReview && prevReview) {
        nextReview.addEventListener("click", () => {
            nextReviewSlide();
            resetReviewAutoplay();
        });

        prevReview.addEventListener("click", () => {
            prevReviewSlide();
            resetReviewAutoplay();
        });
    }

    testimonialDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showReview(index);
            resetReviewAutoplay();
        });
    });

    showReview(0);
    startReviewAutoplay();

});