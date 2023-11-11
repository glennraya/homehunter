document
    .getElementById("videoTrigger")
    .addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("videoDialog").style.display = "block";
        document.getElementById("videoDialog").style.justifyContent = "center";
        // You can use the YouTube Iframe API to control playback if needed
    });

document.getElementById("closeButton").addEventListener("click", function () {
    var videoIframe = document.getElementById('youtubeVideo');
    var videoSrc = videoIframe.src;
    videoIframe.src = '';
    videoIframe.src = videoSrc; // Reset the source to its original value

    document.getElementById("videoDialog").style.display = "none";
});
