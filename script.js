const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("show-icon");
});
