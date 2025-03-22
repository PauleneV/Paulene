document.addEventListener("DOMContentLoaded", function () {
    // Hide loading screen after 1.5 seconds
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.body.classList.add("fade-in");
    }, 1500);
});
