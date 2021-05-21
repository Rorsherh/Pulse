$(document).ready(function(){
    $('.slider__box').slick({
        adaptiveHeight: false,
        autoplay:true,
        autoplaySpeed: 3000,
        speed: 800,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-right.png"></button>',
    });
  });