import { PublicationsCard } from './PublicationsCard.js';
import Swiper, { Navigation, Pagination } from 'swiper';

const generatePublicationsCard = (card) => new PublicationsCard(card, '#publications-template').generate();

export { generatePublicationsCard };

new Swiper ('.publications__container', {
  modules: [ Navigation],
  speed: 450,
  watchOverflow: true,
  grabCursor: true,
  preventInteractionOnTransition: true,
  rewind: true,
  slidesPerView: 2,
  slidesPerGroup: 1,
  centeredSlides: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 8,
    },

    350: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 8,
    },

    1270: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  },

   navigation: {
    nextEl: '.publications__slider-button_right',
    prevEl: '.publications__slider-button_left',
  },
});
