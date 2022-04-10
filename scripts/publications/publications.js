import { PublicationsCard } from './PublicationsCard.js';

const generatePublicationsCard = (card) => new PublicationsCard(card, '#publications-template').generate();

export { generatePublicationsCard };
