//burger
$(function(){
  $('.header__burger').on('click', function(){
    $('.menu').toggleClass('active');
    $('body').toggleClass('active');
  });
});