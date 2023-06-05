const swiper = new Swiper('.product-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 0,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2.5,
      spaceBetween: 18,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
