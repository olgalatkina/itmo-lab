import { PublicationsCard } from './PublicationsCard.js';
import Swiper, { Navigation, Pagination } from 'swiper';

const generatePublicationsCard = (card) => new PublicationsCard(card, '#publications-template').generate();

export { generatePublicationsCard };

new Swiper ('.publications-container', {
  modules: [ Navigation],
  speed: 300,

  navigation: {
    nextEl: '.publications__slider-button_left',
    prevEl: '.publications__slider-button_right',
  },
});
