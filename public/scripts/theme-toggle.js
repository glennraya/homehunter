// Toggles light and dark mode
document.getElementById("dark-btn").addEventListener("click", function (event) {
    event.preventDefault();

    // Saves the theme name in local storage.
    localStorage.theme = "dark";
    document.getElementById("dark-btn").style.display = "none";
    location.reload();
});

document
    .getElementById("light-btn")
    .addEventListener("click", function (event) {
        event.preventDefault();

        // Saves the theme name in local storage.
        localStorage.theme = "light";
        document.getElementById("light-btn").style.display = "none";
        location.reload();
    });
