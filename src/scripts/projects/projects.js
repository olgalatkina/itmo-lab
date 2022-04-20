import ProjectCard from "./ProjectCard.js";

const generateProjectCard = (card) => new ProjectCard(card, '#projects-template').generate();

const sortData = (data, key = 'all') => {
  if (key === 'all') return data;
  return data.filter((card) => card.projects.includes(key));
};

const activateProjectsMenuItem = (menuItems, menuItemElement) => {
  menuItems.forEach((item) => item.classList.remove('sorting__btn-menu_active'));
  menuItemElement.classList.add('sorting__btn-menu_active');
}

const extendFifthCard = (data, collection) => {
  if (data.length > 4) {
    collection[4].classList.add('project_is-change-order', 'project_extended');
  }
}

export { generateProjectCard, sortData, activateProjectsMenuItem, extendFifthCard };
