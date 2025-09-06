const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = document.querySelectorAll("#mobile-menu a");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
