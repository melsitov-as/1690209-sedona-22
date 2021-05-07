let userNav = document.querySelector(".user-nav ");
let mobileMenu = document.querySelector(".user-nav__wrapper");
let hamburgerButton = document.querySelector(".user-nav__hamburger-button");
let closeButton = mobileMenu.querySelector(".close-button");



hamburgerButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mobileMenu.classList.add("menu-active");
  userNav.classList.add("above");
});

closeButton.onclick = function () {
  mobileMenu.classList.remove("menu-active");
  userNav.classList.remove("above");
};



