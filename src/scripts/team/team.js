import TeamCard from "./TeamCard.js";
import Swiper, {Navigation} from 'swiper';

const generateTeamCard = (card) => new TeamCard(card, '#team-template').generate();

new Swiper ('.team__slider', {
  modules: [ Navigation],
  speed: 450,
  slidesPerView: 'auto',
  spaceBetween: 8,
  watchOverflow: true,
  grabCursor: true,

  breakpoints: {
    768: {
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
    }
  },
  navigation: {
    prevEl: '.team__slider-button_prev',
    nextEl: '.team__slider-button_next',
  }
})

export {generateTeamCard};
