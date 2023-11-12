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
