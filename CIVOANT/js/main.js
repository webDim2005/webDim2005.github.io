$(function(){
  $('.products__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: 8500,
    responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }]
  });
  $('.reviews__slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrowLeft.svg" alt="влево">',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrowRight.svg" alt="вправо">',
    responsive: [
    {
      breakpoint: 832,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }]

  });
  $('.btn__menu').on('click', function(){
    $('.menu').toggleClass('active');
  });
});
$(function() {
  let target_block = $(".benefits__item-num1"); // Ищем блок 
  let blockStatus = true;
  $(window).scroll(function() {
    let scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
    if(scrollEvent && blockStatus) {
      blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
      $({numberValue: 0}).animate({numberValue: 3}, {
        duration: 1000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
        easing: "linear",
        step: function(val) {
          $(".benefits__item-num1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
        } 
      });       
    }
  });
  let target_block2 = $(".benefits__item-num2"); // Ищем блок 
  let blockStatus2 = true;
  $(window).scroll(function() {
    let scrollEvent = ($(window).scrollTop() > (target_block2.position().top - $(window).height()));
    if(scrollEvent && blockStatus2) {
      blockStatus2 = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
      $({numberValue: 0}).animate({numberValue: 1500}, {
        duration: 1500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
        easing: "linear",
        step: function(val) {
          $(".benefits__item-num2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
        } 
      });       
    }
  });
  let target_block3 = $(".benefits__item-num3");
  let blockStatus3 = true;
  $(window).scroll(function() {
    let scrollEvent = ($(window).scrollTop() > (target_block3.position().top - $(window).height()));
    if(scrollEvent && blockStatus3) {
      blockStatus3 = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
      $({numberValue: 0}).animate({numberValue: 25}, {
        duration: 1200, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
        easing: "linear",
        step: function(val) {
          $(".benefits__item-num3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
        } 
      });       
    }
  });
})
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors){
  anchor.addEventListener("click", function(event){
    event.preventDefault();
    const block = anchor.getAttribute('href')
    document.querySelector('' + block).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}