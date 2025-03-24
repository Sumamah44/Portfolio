document.addEventListener("DOMContentLoaded", function () {
    // Sidebar Toggle
    const sidebar = document.querySelector(".sidebar");
    const sidebarToggle = document.getElementById("sidebarToggle");

    sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Theme Toggle
    document.getElementById("themeToggle").addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
    });

    // Animate Progress Bars on Scroll
    const progressBars = document.querySelectorAll(".progress-bar");

    function animateProgressBars() {
        progressBars.forEach(bar => {
            if (bar.getBoundingClientRect().top < window.innerHeight) {
                bar.style.width = bar.getAttribute("data-width");
            }
        });
    }

    window.addEventListener("scroll", animateProgressBars);
    animateProgressBars();

    // Form Validation
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form Submitted Successfully!");
    });
});
