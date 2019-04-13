'use strict';

$(document).ready(function() {

  $('.reviews__slider, .cleaning__slider').owlCarousel({
    loop: true,
    margin: 50,

    dots: true,
    responsive: {
      0:{
        items: 1,
        nav: false,
      },
      992:{
        items: 3,
        nav: true
      }
    }
  });

  $('.results__slider').owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    margin: 30,
    responsive: {
      0:{
        items: 1,
        nav: false,
      },
      992:{
        items: 3,
        nav: true,
      }
    }
  });

  $('input[type=tel]').mask("+7 (000) 000 00 00");

  $(".burger[href='#menu']").fancybox({
    touch: false,
    baseTpl:
      '<div class="fancybox-container" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg fancybox-bg--menu"></div>' +
      '<div class="fancybox-inner">' +
      '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
      '<div class="fancybox-toolbar">{{buttons}}</div>' +
      '<div class="fancybox-navigation">{{arrows}}</div>' +
      '<div class="fancybox-stage"></div>' +
      '<div class="fancybox-caption"></div>' +
      "</div>" +
      "</div>",
  });

  $(".calculator__tab").on("click", function() {
    $(".calculator__tab").removeClass('active');
    // $(this).addClass('active')

  })

  $(".menu__submenu-menu a").on("click", function() {
    $.fancybox.close();
  })

  if ($(window).width() <= 1200) {
    $(".block-serv__row").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      margin: 30,
      center: true,
      items: 1
    });
  }



  // Плавный скол с навигации

  /* $(".scrollto > a").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  }); */

  // Плавный скол с навигации
});
