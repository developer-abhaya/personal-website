const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

 // Wait for the DOM to load
 document.addEventListener("DOMContentLoaded", () => {
    // Add click event listener to the button
    document.getElementById("call").addEventListener("click", () => {
        // Initiate a phone call with the specified number
        window.location.href = "tel:9808370638";
    });
});

window.onload = () => {
    // Check if the URL contains a specific hash fragment
    if (window.location.hash === '#home' || window.location.hash === '#skill') {
        // Remove the hash from the URL
        history.replaceState(null, null, window.location.pathname);
    }
};