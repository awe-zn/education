window.onload = initApp;

let swiperIndexEl;

function initApp() {
  initValues();
  initSwipers();
}

function initValues() {
  swiperIndexEl = document.querySelector(".section-index .swiper-container");
}

function initSwipers() {
  new Swiper(swiperIndexEl, {
    loop: true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".section-index .next",
      prevEl: ".section-index .prev",
    },
  });
}
