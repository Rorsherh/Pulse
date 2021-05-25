$(document).ready(function(){
    $('.slider__box').slick({
        adaptiveHeight: false,
        autoplay:true,
        autoplaySpeed: 3000,
        speed: 800,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-right.png"></button>',
    });

    $('.product-card__more').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.product-card__content').eq(i).toggleClass('product-card__content--active');
            $('.product-card__feature').eq(i).toggleClass('product-card__feature--active');
        })
    })

    $('.product-card__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.product-card__content').eq(i).toggleClass('product-card__content--active');
            $('.product-card__feature').eq(i).toggleClass('product-card__feature--active');
        })
    })
  });