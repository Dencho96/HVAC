const partnersSlider = new Swiper('.partners__slider', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 4,
    loop: true,
    navigation: {
      nextEl: '.partners__btn--next',
      prevEl: '.partners__btn--prev',
    },
  });