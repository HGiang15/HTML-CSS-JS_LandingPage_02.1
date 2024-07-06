// cop menu PC to menu Mobile
const pcNav = document.querySelector("#pc-nav");
const mobileNav = document.querySelector("#mobile-nav");

// cop from PC nav to Mobile nav
mobileNav.innerHTML = pcNav.innerHTML;

const links = document.querySelectorAll(".nav a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.parentElement.classList.remove("active"));
    link.parentElement.classList.add("active");
  });
});
