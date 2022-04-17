import TeamCard from "./TeamCard.js";

const generateTeamCard = (card) => new TeamCard(card, '#team-template').generate();

export {generateTeamCard};
