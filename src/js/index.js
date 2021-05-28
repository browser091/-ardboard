$(document).ready(function(){
$('.header-contacts__button').on('click', function(){
    $('.overlay').show(400)
});


$('.popup-close').on('click', function(){
  $('.overlay').hide(400)
})

});



const swiperContainer = new Swiper('.swiper-container', {
  // Optional parameters
    loop: true,
slidesPerView:3,
   // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
//настройки адаптивной версии
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      
    },
      576: {
      slidesPerView: 3,
      
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }

});

