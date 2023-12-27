const contactBtn = document.querySelector(".btn-contact");
const modal = document.querySelector(".modal-bg");
const closeBtn = document.querySelector(".btn-close");
const modalSend = document.querySelector(".btn-send");

const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");
const navLinksList = document.querySelectorAll(".nav-links a");

contactBtn.addEventListener("click", () => {
    modal.classList.remove("modal-hidden");
    modal.classList.add("modal-visible");
    navLinks.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
    modal.classList.add("modal-hidden");
    modal.classList.remove("modal-visible");
});

modalSend.addEventListener("click", () => {
    alert("Message sent!");
    modal.classList.add("modal-hidden");
    modal.classList.remove("modal-visible");
});

// Toggle navigation menu
burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close navigation menu when a link is clicked
navLinksList.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Close navigation menu when clicking outside of it
document.addEventListener("click", (event) => {
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickOnBurger = burgerMenu.contains(event.target);

    if (!isClickInsideNav && !isClickOnBurger) {
        navLinks.classList.remove("active");
    }
});
