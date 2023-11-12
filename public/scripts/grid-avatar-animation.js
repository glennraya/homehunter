function animateRandomDiv() {
    const divsWithImages = document.querySelectorAll(".image-container");

    // Remove the animation from all divs
    divsWithImages.forEach((div) => div.classList.remove("animated"));

    // Randomly select a div
    const randomIndex = Math.floor(Math.random() * divsWithImages.length);
    const selectedDiv = divsWithImages[randomIndex];

    // Apply the animation class
    selectedDiv.classList.add("animated");
    selectedDiv.classList.add("z-30");

    // Remove the animation class after 800ms
    setTimeout(() => {
        selectedDiv.classList.remove("animated");
    }, 800);
}

// Set the interval
setInterval(animateRandomDiv, 2000);

// Initial call to start the animation
animateRandomDiv();
