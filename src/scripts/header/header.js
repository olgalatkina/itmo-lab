import Link from './Link';
import Anchor from './Anchor';

//Тут проходит поиск сразу по двум классам, собирая в один nodelist.
const links = document.querySelectorAll('.nav__link, .nav__sublink');
const sections = document.querySelectorAll('section');
const headerLogoArea = document.querySelector('.header__logo-area');

// Функция offsetGetter принимается классом "якорь" и позволит высчитывать высоту меню в момент клика по ссылке
// (необходимо для понимания высоты отступа).
const offsetGetter = () => {
  return headerLogoArea.clientHeight;
}

//Переводим в "настоящий" массив, т.к. в дальнейшем понадобится метод filter.
//После querySelectorAll создается не массив, а nodelist, к которому многие классические методы не применимы.
const arrayOfLinks = Array.from(links);

//Функция makeLinks перебирает все секции сайта и создает для них экземпляры класса "якорь".
//Далее ищет в массиве ссылок соответствующую секции ссылку (проверка по href и id).
//После происходит проверка, нашлась ли для секции ссылки.
//Если проверка успешная - происходит создание экземпляров класса "ссылка" с присвоением им аргумента
//в виде колбека из соответствующего класса "якорь" (соответствующей секции).
//В конце на ссылку вешается слушатель.
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
