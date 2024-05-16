const links = document.querySelectorAll(".nav a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.parentElement.classList.remove("active"));
    link.parentElement.classList.add("active");
  });
});
