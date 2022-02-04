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
//-----jQuery end-----
new WOW().init({
  offset: -5,
});