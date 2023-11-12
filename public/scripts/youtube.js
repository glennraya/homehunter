// Show the Youtube dialog
document
    .getElementById("videoTrigger")
    .addEventListener("click", function (event) {
        event.preventDefault();
        var videoDialog = document.getElementById("videoDialog");
        document.getElementById("videoDialog").style.display = "block";

        requestAnimationFrame(function () {
            videoDialog.classList.add("visible");
        });
        document.getElementById("videoDialog").style.justifyContent = "center";
    });

// Hide the Youtube dialog
document.getElementById("closeButton").addEventListener("click", function () {
    var videoIframe = document.getElementById("youtubeVideo");
    var videoSrc = videoIframe.src;
    videoIframe.src = "";
    videoIframe.src = videoSrc;

    var videoDialog = document.getElementById("videoDialog");
    videoDialog.classList.remove("visible");

    videoDialog.addEventListener(
        "transitionend",
        function () {
            // Only set to display none after the fade out transition ends
            if (!videoDialog.classList.contains("visible")) {
                videoDialog.style.display = "none";
            }
        },
        { once: true },
    ); // Ensures the event listener is removed after it fires once
});
