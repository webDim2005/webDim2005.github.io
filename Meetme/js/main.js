$(function(){
  $('.news__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrowLeft.svg" alt="влево">',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrowRight.svg" alt="вправо">',
    speed: 750,
    responsive: [
    {
      breakpoint: 1130,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
      }
    },
    {
      breakpoint: 772,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: 3000,
      }
    }
  ]
  })
});
new WOW().init({
  offset: -5,
});
let menu = document.querySelector('.menu');
let burger = document.querySelector('.burger');
let body = document.querySelector('body');
let link = document.querySelector('.menu__link');
burger.onclick = function(){
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("active");
}