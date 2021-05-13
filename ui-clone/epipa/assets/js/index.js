window.onload = initApp;

let swiperIndexEl, swiperHomeEl;

function initApp() {
  initValues();
  initSwipers();
}

function initValues() {
  swiperIndexEl = document.querySelector(".section-index .swiper-container");
  swiperHomeEl = document.querySelector(".section-homes .swiper-container");
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

  new Swiper(swiperHomeEl, {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },

    navigation: {
      nextEl: ".section-homes .next",
      prevEl: ".section-homes .prev",
    },
  });
}
