import { PublicationsCard } from './PublicationsCard.js';
import Swiper, { Navigation} from 'swiper';

const generatePublicationsCard = (card) => new PublicationsCard(card, '#publications-template').generate();

export { generatePublicationsCard };

new Swiper ('.publications__container', {
  modules: [ Navigation],
  speed: 450,
  grabCursor: true,
  preventInteractionOnTransition: true,
  rewind: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: false,

  breakpoints: {
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
      spaceBetween: 20,
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
