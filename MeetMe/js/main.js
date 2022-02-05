//-----jQuery start-----
//menu actions
$(document).on('click', ".burger",function(){
  $("body").toggleClass("active");
  $(".burger").toggleClass("active");
  $(".menu").toggleClass("active");
});
$(document).on('click', ".menu__list-item",function(){
  $("body").removeClass("active");
  $(".burger").removeClass("active");
  $(".menu").removeClass("active");
});
//slider actions
$(function(){
  $('.news__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    prevArrow: '<svg class="slider__arrow slider__arrow-left" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.601 8.05518L16.1562 27.5L35.601 46.9448L38.8437 43.7043L22.6371 27.5L38.8437 11.2956L35.601 8.05518Z" fill="white"/></svg>',
    nextArrow: '<svg class="slider__arrow slider__arrow-right" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.399 46.9448L38.8438 27.5L19.399 8.05524L16.1563 11.2957L32.3629 27.5L16.1563 43.7044L19.399 46.9448Z" fill="white"/></svg>',
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
//-----jQuery end-----
new WOW().init({
  offset: -5,
});