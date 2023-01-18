// ------- ИМПОРТЫ -------
import '../pages/index.css';
import aboutData from "./mock/mock-about.js";
import projectsData from "./mock/mock-projects.js";
import publicationsData from "./mock/mock-publications.js";
import teamData from "./mock/mock-team.js";
import partnersData from "./mock/mock-partners.js";
import { renderElementsToDOM } from './utils.js';
import { generateProjectCard, sortData, activateProjectsMenuItem, extendFifthCard } from './projects/projects.js';
import { generatePublicationsCard } from './publications/publications.js';
import { generateTeamCard } from "./team/team.js";

// ------- ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ -------
// MENU

// INTRO

// ABOUT

//RESEARCH

// PROJECTS
const projects = document.querySelector('.projects');
const projectsContainerElement = projects.querySelector('.projects__gallery');
const sortingTitle = projects.querySelector('.sorting__title');
const sortingHeaderBtn = projects.querySelector('.sorting__btn-header');
const projectsMenu = projects.querySelector('.sorting__menu');
const projectsMenuBtns = projectsMenu.querySelectorAll('.sorting__btn-menu');
const projectsCards = projects.getElementsByClassName('project');
const openProjectsGalleryBtn = projects.querySelector('.projects__btn-gallery');

// EDUCATION

// PUBLICATIONS
const publications = document.querySelector('.publications');
const publicationsContainerElement = publications.querySelector('.publications__cards');

// TEAM
const team = document.querySelector('.team');
const teamContainerElement = team.querySelector('.team__cards');
// PARTNERS

// ------- КОД -------
// MENU

// INTRO

// ABOUT

//RESEARCH

// PROJECTS
renderElementsToDOM(projectsData, projectsContainerElement, generateProjectCard);
extendFifthCard(projectsData, projectsCards);
openProjectsGalleryBtn.addEventListener('click', () => {
  projectsContainerElement.classList.toggle('projects__gallery_opened');
});
const toggleOpenSortingMenu = () => {
  projectsMenu.classList.toggle('sorting__menu_open');
  sortingHeaderBtn.classList.toggle('sorting__btn-header_rotate');
};
const handlerProjectsMenuClick = (evt) => {
  const menuItemName = evt.target.id;
  activateProjectsMenuItem(projectsMenuBtns, evt.target);
  sortingTitle.textContent = evt.target.textContent;
  toggleOpenSortingMenu();
  projectsContainerElement.textContent = '';
  const sortedData = sortData(projectsData, menuItemName);
  renderElementsToDOM(sortedData, projectsContainerElement, generateProjectCard);
  extendFifthCard(sortedData, projectsCards);
};
projectsMenu.addEventListener('click', handlerProjectsMenuClick);
sortingHeaderBtn.addEventListener('click', toggleOpenSortingMenu);

// EDUCATION

// PUBLICATIONS
renderElementsToDOM(publicationsData, publicationsContainerElement, generatePublicationsCard);
// TEAM
renderElementsToDOM(teamData, teamContainerElement, generateTeamCard)
// PARTNERS
