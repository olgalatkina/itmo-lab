import aboutData from "./mock/mock-about.js";
import projectsData from "./mock/mock-projects.js";
import publicationsData from "./mock/mock-publications.js";
import teamData from "./mock/mock-team.js";
import partnersData from "./mock/mock-partners.js";
import { renderElementsToDOM } from './utils.js';
import { generateProjectCard } from './projects/projects.js';

const projects = document.querySelector('.projects');
const projectsContainerElement = projects.querySelector('.projects__gallery');
const openGalleryBtn = projects.querySelector('.projects__btn-gallery');
renderElementsToDOM(projectsData, projectsContainerElement, generateProjectCard);
openGalleryBtn.addEventListener('click', () => {
  projectsContainerElement.classList.toggle('projects__gallery_opened');
});

console.log(aboutData);
console.log(projectsData);
console.log(publicationsData);
console.log(teamData);
console.log(partnersData);
