$(document).ready(function() {
  var setSlider = new Swiper('.set-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.set-slider__button--next',
      prevEl: '.set-slider__button--prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  });
});