"use strict";

$(document).ready(function (){

  
  // E-mail validation via regular expression
  function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
  };




  // backstretch
  $("header").backstretch("img/bg.jpg");

  // Parallax
  $('.parallax-texts').parallax({imageSrc: 'img/bg-2.jpg'});

  // Slick initializer function
  $(".gm-customers-carousel").slick({
    autoplay: true,
    autoplaySpeed: 3500,
    dots: true,
    arrows: false
  });
  $(".gm-clients-carousel").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false
  });
  $(".gm-news-carousel").slick({
    autoplay: false,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false
  });


  // PrettyEmbed.js
  $('#video').prettyEmbed({
      videoID: 'GIalL5fkhPM',
      previewSize: 'hd',

      // Embed controls
      showInfo: false,
      showControls: true,
      loop: false,

      colorScheme: 'dark',
      showRelated: false,

      useFitVids: true
  });

  // Setting default easing
  jQuery.easing.def = "easeInOutExpo";

  // copying menu content to sidebar menu
  var menuContent = $('.gm-menu ul').html();
  $('.panel img').after('<ul>' + menuContent + '</ul');

  // Scroll To # Links
  $('.gm-menu a[href^="#"],.panel ul li a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash;
    target = target.replace('#', '');
     var $target = $('.' + target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+50
    }, 1000, function() {
      window.location.hash = '#' + target;
    });
  });

  // call bigSlide
  $('.gm-menu span,.gm-menu-fixed-button span').bigSlide({
    easyClose: true,
    side: 'right',
    menuWidth: '300px',
    afterOpen: function() {
      $('.gm-menu span,.gm-menu-fixed-button span').removeClass('ion-android-menu').addClass('ion-android-close');
      $('.panel').css('box-shadow','-5px 0 10px 0 rgba(0,0,0,.1),-5px 0 30px 0 rgba(0,0,0,.20)');
    },
    afterClose: function() {
      $('.gm-menu span,.gm-menu-fixed-button span').removeClass('ion-android-close').addClass('ion-android-menu');
      $('.panel').css('box-shadow','');
    }
  });

  // fixed sidebar menu button fading
  function menuScroll() {
    var h = $('header').outerHeight();
    if ($(window).scrollTop() > h) {
      $('.gm-menu-fixed-button span').css({'visibility':'visible','opacity':1});
    } else {
      $('.gm-menu-fixed-button span').css({'visibility':'hidden','opacity':0});
    }
  }

  menuScroll();
  $(window).scroll(function() {
    menuScroll();
  });
  
});

// Preloader
// Change delay and fadeOut speed (in miliseconds)
$(window).load(function() {
  $(".gm-preloader").delay(250).fadeOut(500);
});