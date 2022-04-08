import aboutData from "./mock/mock-about.js";
import projectsData from "./mock/mock-projects.js";
import publicationsData from "./mock/mock-publications.js";
import teamData from "./mock/mock-team.js";
import partnersData from "./mock/mock-partners.js";
import { renderElementsToDOM } from './utils.js';
import { generateProjectCard, sortData, activateProjectsMenuItem, extendFifthCard } from './projects/projects.js';

// PROJECTS
const projects = document.querySelector('.projects');
const projectsContainerElement = projects.querySelector('.projects__gallery');
const sortingTitle = projects.querySelector('.sorting__title');
const sortingHeaderBtn = projects.querySelector('.sorting__btn-header');
const projectsMenu = projects.querySelector('.sorting__menu');
const menuBtns = projectsMenu.querySelectorAll('.sorting__btn-menu');
const projectsCards = projects.getElementsByClassName('project');
const openGalleryBtn = projects.querySelector('.projects__btn-gallery');

renderElementsToDOM(projectsData, projectsContainerElement, generateProjectCard);
extendFifthCard(projectsData, projectsCards);
openGalleryBtn.addEventListener('click', () => {
  projectsContainerElement.classList.toggle('projects__gallery_opened');
});
const toggleOpenSortingMenu = () => {
  projectsMenu.classList.toggle('sorting__menu_open');
  sortingHeaderBtn.classList.toggle('sorting__btn-header_rotate');
};
const handlerProjectsMenuClick = (evt) => {
  const menuItemName = evt.target.id;
  activateProjectsMenuItem(menuBtns, evt.target);
  sortingTitle.textContent = evt.target.textContent;
  toggleOpenSortingMenu();
  projectsContainerElement.textContent = '';
  const sortedData = sortData(projectsData, menuItemName);
  renderElementsToDOM(sortedData, projectsContainerElement, generateProjectCard);
  extendFifthCard(sortedData, projectsCards);
};
projectsMenu.addEventListener('click', handlerProjectsMenuClick);
sortingHeaderBtn.addEventListener('click', toggleOpenSortingMenu);

// console.log(aboutData);
// console.log(projectsData);
// console.log(publicationsData);
// console.log(teamData);
// console.log(partnersData);
