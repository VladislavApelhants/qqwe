var swiper = new Swiper('.mySwiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination

  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  on: {
    slideChange: function () {
      var currentSlide = this.realIndex + 1;
      var totalSlides = this.slides.length;
      document.querySelector('.first-slide-num').innerHTML =
        currentSlide < 10 ? '0' + currentSlide : currentSlide;
      document.querySelector('.last-slide-num').innerHTML =
        totalSlides < 10 ? '0' + totalSlides : totalSlides;
    },
  },
 
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
