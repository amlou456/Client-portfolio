let bar = document.querySelector(".bar");
let mobileLogo = document.querySelector(".logoMobile");
let navBar = document.querySelector(".navBar");

bar.addEventListener("click", function (e) {
  e.currentTarget.classList.add("fadeOut");
  mobileLogo.classList.add("fadeOut");
  navBar.classList.add("fadeIn");
});
