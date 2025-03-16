const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const icon = navToggle.querySelector("i");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
    icon.classList.toggle("rotate");
});