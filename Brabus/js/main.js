$(function(){
  $('.reviews__slider').slick({
    prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrow-left.svg" alt="влево">',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrow-right.svg" alt="вправо">',
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    autoplay: false,
    responsive: [
    {
      breakpoint: 620,
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: false,
        centerMode: false,
      }
    }
    ]
  });
});
//menu actions
$(document).on('click', ".burger",function(){
  $("body").toggleClass("active");
  $(".burger").toggleClass("active");
  $(".menu").toggleClass("active");
});
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [56.813290567886696,35.87423000000002],
            zoom: 15,
            controls: ['zoomControl'],
            behaviors: ['drag']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Автомастерская BRABUS',
            balloonContent: '<div class="balloon"><div class="balloon__location"><div class="balloon__location-inner"><img src="images/location-contacts.svg" alt=""><p class="balloon__location-adress">г. Тверь, Брусилово 59/1</p></div><p class="balloon__location-descr">Работаем с 09:00 до 21:00</p><p class="balloon__location-descr">Без выходных</p></div><div class="balloon__phone"><div class="balloon__phone-inner"><img src="images/phone-contacts.svg" alt=""><a class="balloon__phone-link" href="tel:475337">47-53-37</a></div></div></div>',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/location-map.svg',
            // Размеры метки.
            iconImageSize: [64, 64],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-32, -64]
        })
    myMap.geoObjects
    .add(myPlacemark)
});