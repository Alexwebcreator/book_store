$(document).ready(function() {
  var setSlider = new Swiper('.set-slider', {
    // Optional parameters
    loop: false,
    initialSlide: 1,
    watchOverflow: true,

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
$(document).ready(function() {
  var unreleasedSlider = new Swiper('.unreleased-slider', {
    // Optional parameters
    loop: false,
    initialSlide: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.unreleased-slider__button--next',
      prevEl: '.unreleased-slider__button--prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // Обработка форм
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста, укажите свое имя",
          minlength: "Имя должно содержать не менее 2 букв",
        },
        email: {
          required: "Нам нужен ваш email адрес чтобы связаться с вами",
          email: "Ваш email адрес должен быть в формате name@domain.com"
        },
        phone: {
          required: "Обязательно укажите номер телефона",
          minlength: "Номер телефона должен содержать не менее 10 символов",
        },
      },
    });
  });
  $(document).ready(function(){
    $(".input--phone").mask("+7-(999)-999-99-99", { placeholder: "+7 (___) ___-__-__"});
  });

  var likeButton = $("[data-toggle=like]");
  likeButton.on("click", likeColor);
  function likeColor() {
    var colorChange = $(this).attr("data-href");
    $(colorChange).find(".reference-buy__heart").addClass(".reference-buy__heart--red");
  }

  $('img.reference-buy__heart--red').each(function(){
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
      $.get(imgURL, function(data) {
      var $svg = $(data).find('svg');
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });
  
});