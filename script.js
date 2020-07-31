const nav = document.getElementsByTagName("nav")[0];
const navbar = document.querySelector("nav ul");
const hamburgerMenu = document.querySelector(".menu-toggle");
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    nav.classList.add("nav-color");
    nav.style.transition = ".5s";
    nav.style.boxShadow = "0 1px 10px rgba(0,0,0,0.2)";
  } else {
    nav.classList.remove("nav-color");
    nav.style.boxShadow = "";
  }
});
hamburgerMenu.addEventListener("click", function () {
  navbar.classList.toggle("slide");
});
