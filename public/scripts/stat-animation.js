document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-number");
    const speed = 200; // Adjust the speed of the count up

    const animate = (counter) => {
        const value = +counter.getAttribute("data-target");
        const increment = value / speed;

        let currentNumber = 0;
        const counterInterval = setInterval(() => {
            currentNumber += increment;
            if (currentNumber > value) {
                counter.innerText = value;
                clearInterval(counterInterval);
            } else {
                counter.innerText = Math.ceil(currentNumber);
            }
        }, 1);
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animate(entry.target);
                } else {
                    entry.target.innerText = "0"; // Reset to 0 when not in view
                }
            });
        },
        {
            threshold: 0.1,
        },
    );

    counters.forEach((counter) => {
        observer.observe(counter);
    });
});
