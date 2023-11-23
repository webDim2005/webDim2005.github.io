// TIMER__SALES
document.addEventListener('DOMContentLoaded', function () {
  // конечная дата, например 1 июля 2021
  const deadline = new Date(2023, 11, 15);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});


new WOW().init({
  offset: 0,
});

// ACCARDION
var acc = $(".question__btn");
acc.click(function() {
    $(this).toggleClass("active");
    var answer = $(this).parent().next(".question__item-answer");
    if (answer.css("max-height") === "0px") {
        answer.css("max-height", answer[0].scrollHeight  + "px");
        answer.css("max-height", answer[0].scrollHeight  + "px");
    } else {
        answer.css("max-height", "0px");
    }
});
$('.base').on('click', function() {
  $('.price__block-1').toggleClass('active');
  $('.price__block-2').toggleClass('active');
});
$('.full').on('click', function() {
  $('.price__block-1').toggleClass('active');
  $('.price__block-2').toggleClass('active');
});
// PARALLAX ITEMS
if (document.documentElement.clientWidth > 1280) {
  window.onload = function(){
  const parallax = document.querySelector('.header');
  const parallaxTwo = document.querySelector('.whom');

  if (parallax){
    const glassLeft = document.querySelector('.header__img-left');
    const glassRight = document.querySelector('.header__img-right');
    const whomInfo = document.querySelector('.whom__info');

    //коэффициенты
    const forLeft = -8;
    const forRight = 8;
    const forWhom = -40;

    //скорость анимации
    const speed = 0.05;

    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent  = 0;

    function setMouseParallaxStyle(){
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);

      glassLeft.style.cssText = `transform: translate(${positionX / forLeft}%, ${positionY / forLeft}%);`;
      glassRight.style.cssText = `transform: translate(${positionX / forRight}%, ${positionY / forRight}%);`;
      whomInfo.style.cssText = `transform: translate(${positionX / forWhom}%, ${positionY / forWhom}%);`;

      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function(e){
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeight * 100;
    });
    parallaxTwo.addEventListener("mousemove", function(e){
      const parallaxWidth = parallaxTwo.offsetWidth;
      const parallaxHeight = parallaxTwo.offsetHeight;

      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeight * 100;
    });
  }
}
}
// SLIDER
$(document).ready(function(){
  $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 1000,
    arrows: false,
    responsive: [
    {
      breakpoint: 1040,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    ]
  });
});


$('.arrow__left').on('click', function() {
  $('.reviews__slider').slick('slickPrev');
});
$('.arrow__right').on('click', function() {
  $('.reviews__slider').slick('slickNext');
});

// BURGER
$('.burger').on('click', function() {
  $('.menu').toggleClass('active');
  $('.burger').toggleClass('active');
  $('body').toggleClass('active');
});

$(function() {
  let target_block = $(".water"); // Ищем блок 
  let blockStatus = true;
  $(window).scroll(function() {
    let scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
    if(scrollEvent && blockStatus) {
      blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
      $({numberValue: 0}).animate({numberValue: 80}, {
        duration: 2500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
        easing: "linear",
        step: function(val) {
          $(".water").html(Math.ceil(val) + "%"); // Блок, где необходимо сделать анимацию
        } 
      });       
    }
  });
});

