new Splide(".splide", {
    type: "loop",
    autoplay: true,
    perPage: 3,
    rewind: true,
    // turn to false, if you don't want to show the carousel page arrows.
    arrows: true,
    gap: 32,

    padding: 24,

    // Responsive breakpoints for the carousel.
    breakpoints: {
        640: {
            perPage: 1,
        },
        768: {
            perPage: 1,
        },
        1024: {
            perPage: 2,
        },
        1280: {
            perPage: 2,
        },
        1536: {
            perPage: 3,
        },
    },
}).mount();
