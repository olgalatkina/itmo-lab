import ProjectCard from "./ProjectCard.js";

const generateProjectCard = (card) => new ProjectCard(card, '#projects-template').generate();

export { generateProjectCard };
