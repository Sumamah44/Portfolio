document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded!");

    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Your Form Has Been Submitted Successfully!");
    });
});
