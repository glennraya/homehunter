document
    .getElementById("videoTrigger")
    .addEventListener("click", function (event) {
        event.preventDefault();
        var videoDialog = document.getElementById("videoDialog");
        videoDialog.classList.add("visible");
        document.getElementById("videoDialog").style.display = "block";
        document.getElementById("videoDialog").style.justifyContent = "center";
    });

document.getElementById("closeButton").addEventListener("click", function () {
    var videoIframe = document.getElementById("youtubeVideo");
    var videoSrc = videoIframe.src;
    videoIframe.src = "";
    videoIframe.src = videoSrc;

    var videoDialog = document.getElementById("videoDialog");
    videoDialog.classList.remove("visible");
    // To ensure the dialog is not display:block when fully transparent
    setTimeout(function () {
        videoDialog.style.display = "none";
    }, 200); // This duration should match the CSS transition duration
});
