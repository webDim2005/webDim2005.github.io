let menu = document.querySelector(".menu");
let burger = document.querySelector(".burger");
let body = document.querySelector("body");
burger.onclick = function() {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  body.classList.toggle("active");
}
new WOW().init({
  offset: -5,
});