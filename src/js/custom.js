'use strict';

$('.reviews__slider').owlCarousel({
  loop: true,
  margin: 50,
  nav: true,
  dots: true,
  responsive: {
    0:{
      items: 1
    },
    992:{
      items: 3
    }
  }
})

// Плавный скол с навигации

/* $(".scrollto > a").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
}); */

// Плавный скол с навигации
