$(document).ready(function() {
  var setSlider = new Swiper('.set-slider', {
    // Optional parameters
    loop: false,
    initialSlide: 1,
    watchOverflow: true,

    // Navigation arrows
    navigation: {
      nextEl: '.set__button--next',
      prevEl: '.set__button--prev',
      disabledClass: 'set__disabled',
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
      disabledClass: 'unreleased-slider__button--disabled',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  });

  var menuButton = $(".menu-button");
  menuButton.on('click', function () {
    $(".navbar-bottom").toggleClass('navbar-bottom--visible');
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
          required: "Укажите свое имя",
          minlength: "Имя должно содержать не менее 2 букв",
        },
        email: {
          required: "Введите ваш email адрес",
          email: "Формат email: name@domain.com"
        },
        phone: {
          required: "Укажите номер телефона",
          minlength: "Номер телефона должен содержать не менее 10 символов",
        },
      },
    });
  });
  $(document).ready(function(){
    $(".input--phone").mask("+7-(999)-999-99-99", { placeholder: "+7 (___) ___-__-__"});
  });

  $('img.reference-buy__heart').each(function(){
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

  var like = document.getElementById("heart-1");
  like.addEventListener("click", function() {
    document.getElementById("heart-1").classList.toggle("reference-buy__link--active");
  });

  var like = document.getElementById("heart-2");
  like.addEventListener("click", function() {
    document.getElementById("heart-2").classList.toggle("reference-buy__link--active");
  });

  var like = document.getElementById("heart-3");
  like.addEventListener("click", function() {
    document.getElementById("heart-3").classList.toggle("reference-buy__link--active");
  });

  var like = document.getElementById("heart-4");
  like.addEventListener("click", function() {
    document.getElementById("heart-4").classList.toggle("reference-buy__link--active");
  });

  var like = document.getElementById("heart-5");
  like.addEventListener("click", function() {
    document.getElementById("heart-5").classList.toggle("reference-buy__link--active");
  });

  var like = document.getElementById("heart-6");
  like.addEventListener("click", function() {
    document.getElementById("heart-6").classList.toggle("reference-buy__link--active");
  });

  $('img.unreleased-slider__arrow').each(function(){
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