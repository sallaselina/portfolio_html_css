const topButton = document.getElementById("topBtn");
const navBar = document.querySelector(".navbar");
const header = document.querySelector("header");
const mobBtn = document.getElementById("mobileNavBtn");
const menuitems = document.querySelectorAll("nav ul li");
const nav = document.querySelector("nav ul");
const backTopBtn = document.querySelector("#topBtn");
const closeBtn = document.getElementById("closeBtn");

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.onscroll = function () {
  scrollFunction();
};

const toggleMenu = () => {
  nav.classList.toggle("responsive");
};

const toggleClose = () => {
  closeBtn.classList.toggle("visible");
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    topButton.style.display = "block";
    header.classList.add = "nav-bg";
  } else {
    topButton.style.display = "none";
    header.classList.remove = "nav-bg";
  }
}

backTopBtn.addEventListener("click", backToTop);
mobBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleClose);
menuitems.forEach((item) => item.addEventListener("click", toggleMenu));
