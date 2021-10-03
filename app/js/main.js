const partnersSlider = new Swiper('.partners__slider', {
  speed: 400,
  spaceBetween: 100,
  loop: true,
  navigation: {
    nextEl: '.partners__btn--next',
    prevEl: '.partners__btn--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1205: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

$(".header__menu-btn").click(function () {
  $(".header__menu-btn").toggleClass("is-active");
});

$('.header__menu-btn').on('click', function () {
  $('.header__nav').slideToggle();
});