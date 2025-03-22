// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change Header Background on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Hide loading screen after 1.5 seconds
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.body.classList.add("fade-in");
    }, 1500);
});

function openPopup(id) {
    document.getElementById(id).style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function closeAllPopups() {
    let popups = document.getElementsByClassName("popup");
    for (let i = 0; i < popups.length; i++) {
        popups[i].style.display = "none";
    }
    document.getElementById("overlay").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    // Hide loading screen after 1.5 seconds
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.body.classList.add("fade-in");
    }, 1500);
});
