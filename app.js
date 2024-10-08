const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("call").addEventListener("click", () => {
        window.location.href = "tel:9808370638";
    });
});
