var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper1 = new Swiper(".mySwiper1", {
  loop: true,
  spaceBetween: 250,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  autoplay: {
    delay:2000,
    disableOnInteraction: false,
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: false,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper1,
  },
});
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});