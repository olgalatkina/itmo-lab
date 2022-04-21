import Link from './Link';
import Anchor from './Anchor';

const links = document.querySelectorAll('.nav__link, .nav__sublink');
const sections = document.querySelectorAll('section');
const headerLogoArea = document.querySelector('.header__logo-area');

const offsetGetter = () => {
  return headerLogoArea.clientHeight;
}

const arrayOfLinks = Array.from(links);
const makeLinks = () => {
    sections.forEach((section) => {
    const anchor = new Anchor(section, offsetGetter);
    const linkItems = arrayOfLinks.filter(link => {
      return link.getAttribute('href') === `#${anchor.getName()}`;
    });
    if(linkItems[0]) {
      linkItems.forEach((item) => {
        const link = new Link(item, anchor.goTo.bind(anchor));
        link.setEventListeners();
      })
    }
  });
};

export {makeLinks};
