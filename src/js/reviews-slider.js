// core version + navigation, pagination modules:
import Swiper, { Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.reviews-slider', {
  // configure Swiper to use modules
  modules: [Pagination],

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});
