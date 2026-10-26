
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");
const yearElement = document.getElementById("year");

// Update copyright year automatically
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Open and close mobile navigation
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

// Close menu and highlight the selected section
navItems.forEach((link) => {
    link.addEventListener("click", () => {
        navItems.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");

        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});
