
$(function () {
   $('.header__btn').on('click',function () {
      $('.rightside-menu').removeClass('rightside-menu--close');
      $('.rightside-menu__close').addClass('animate__heartBeat');
      // document.body.style.overflow = 'hidden';
      // document.body.style.paddingRight = '17px';
   });

   $('.rightside-menu__close').on('click',function () {
      $('.rightside-menu').addClass('rightside-menu--close');
      $('.rightside-menu__close').removeClass('animate__heartBeat');
      // document.body.style.overflow = '';
      // document.body.style.paddingRight = '0';
   });

   $('.top__slider').slick({
      dots: true,
      arrows: false,
      autoplay: true
   });

   $('.contact-slider').slick({
      slidesToShow: 10,
      slidesToScroll: 10,
      dots: true,
      arrows: false
   });

   $('.article-slider__box').slick({
      prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft "><img src="./images/icons/arrow-slide-left.svg" alt="left-arrow"></button>',
      nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright "><img src="./images/icons/arrow-slide-right.png" alt="right-arrow"></button>'
   });

   try {
      let mixer = mixitup('.gallery__inner',{
         load: {
            filter: '.living'
         }
      });
   } catch (error) {
      console.log(`${error.message} (cozz we dont have filtel on this page. That's not a problem, take it ease)`);
   }


})


