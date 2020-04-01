$(document).ready(function(){
  $(".card--custom__item").hover(function()
  {
     $(this).toggleClass('card--custom__item--hovered');
  });

  $('.browse__link').hover(function(){
    $('.browse__menu').show();
    $('.main').hover(function(){
      $('.browse__menu').hide();
    });
  });
})
