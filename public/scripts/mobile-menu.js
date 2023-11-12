document
    .getElementById("menu-open")
    .addEventListener("click", function (event) {
        event.preventDefault();
        var menu = document.getElementById("menu");
        document.getElementById("menu").style.display = "block";
        document.getElementById("menu").classList.remove = "hidden";
    });

document
    .getElementById("menu-close")
    .addEventListener("click", function (event) {
        event.preventDefault();
        var menu = document.getElementById("menu");
        menu.style.display = "none";
    });

document.getElementById("dark-btn").addEventListener("click", function (event) {
    event.preventDefault();

    localStorage.theme = "dark";
    document.getElementById("dark-btn").style.display = "none";
    location.reload();
});

document
    .getElementById("light-btn")
    .addEventListener("click", function (event) {
        event.preventDefault();

        localStorage.theme = "light";
        document.getElementById("light-btn").style.display = "none";
        location.reload();
    });
