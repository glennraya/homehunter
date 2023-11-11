// All element with an data-tilter html attribute will be skewed animated upon hover.
const elements = document.querySelectorAll("[data-tilter]");

elements.forEach((element) => {
    gsap.set(element, { transformPerspective: 1000 });

    element.addEventListener("mouseenter", () => {
        gsap.to(element, {
            duration: 0.2,
            scale: 1.05,
            ease: "power2.out",
        });
    });

    element.addEventListener("mousemove", (e) => {
        const rect = element.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / element.clientWidth - 0.5) * 2;
        const y = ((e.clientY - rect.top) / element.clientHeight - 0.5) * 2;

        gsap.to(element, {
            duration: 0.5,
            rotationY: x * 15,
            rotationX: y * -15,
            ease: "power2.out",
        });
    });

    element.addEventListener("mouseleave", () => {
        gsap.to(element, {
            duration: 0.5,
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            ease: "power2.out",
        });
    });
});
