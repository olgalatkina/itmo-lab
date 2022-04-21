import Link from './Link';
import Anchor from './Anchor';
import Nav from './Nav';

//создаем экземпляр класса Nav(хедер) и запускаем слушатели
const nav = new Nav('header')

//Тут проходит поиск сразу по двум классам, собирая в один nodelist.
const links = document.querySelectorAll('.nav__link, .nav__sublink');
const sections = document.querySelectorAll('section');
const headerLogoArea = document.querySelector('.header__logo-area');

// Функция offsetGetter принимается классом "якорь" и позволит высчитывать высоту меню в момент клика по ссылке
// (необходимо для понимания высоты отступа).
const offsetGetter = () => {
  return headerLogoArea.clientHeight;
}

//Функция callbackScroll это колбек для листенера на всем документе.
const callbackScroll = (evt) => {
  evt.preventDefault();
  //Эта константа находит текущее положение экрана и корректирует его с учетом высоты хедера.
  const currentOffset = window.scrollY + offsetGetter();
  let lowest = undefined;
  //Если высота секции равна или выше (цифра меньше) текущего положения экрана
  //И нижняя на данный момент не найдена или находится выше текущей найденной секции -
  //перезаписываем переменную lowest.
  sections.forEach((s)=>{
    if (s.offsetTop<=currentOffset && (!lowest || lowest.offsetTop<s.offsetTop))
    {
      lowest = s;
    }
  });
  //Если lowest был найден и если он не intro - присваиваем документу хэш с именем секции.
  //Если текущая секция intro - очищаем хэш.
  if (lowest) {
    if (lowest.getAttribute('id') === 'intro') {
      history.replaceState(null, null, ' ');
    } else window.location.hash = `#${lowest.getAttribute('id')}`;
  }
}

//Создаем функцию для установки листенера скролла на странице.
const setScrollListener = () => document.addEventListener("scroll", callbackScroll);


//Переводим в "настоящий" массив, т.к. в дальнейшем понадобится метод filter.
//После querySelectorAll создается не массив, а nodelist, к которому многие классические методы не применимы.
const arrayOfLinks = Array.from(links);

//Получаем хэш страницы при загрузке (если имеется).
const url = new URL(window.location);
const urlHash = url.hash;


//Функция makeLinks перебирает все секции сайта и создает для них экземпляры класса "якорь".
//Далее ищет в массиве ссылок соответствующую секции ссылку (проверка по href и id).
//После происходит проверка, нашлась ли для секции ссылки.
//Если проверка успешная - происходит создание экземпляров класса "ссылка" с присвоением им аргумента
//в виде колбека из соответствующего класса "якорь" (соответствующей секции).
//В конце на ссылку вешается слушатель.
const makeLinks = () => {
    sections.forEach((section) => {
    const anchor = new Anchor(section, offsetGetter);
    const anchorName = `#${anchor.getName()}`;
    const linkItems = arrayOfLinks.filter(link => {
      return link.getAttribute('href') === anchorName;
    });
    if(linkItems[0]) {
      linkItems.forEach((item) => {
        const link = new Link(item, () => {
          //Удаляем слушатель, т.к. он помешает переходу по ссылке.
          document.removeEventListener("scroll", callbackScroll);
          //Добавляем документу ссылку вида #название-секции
          //(в коде убирается дефолтное поведение ссылок, такой хэш сам не будет добавляться)
          document.location.hash = anchorName;
          anchor.goTo();
          nav.close();
          //Возвращаем слушатель с отсрочкой по таймеру (этого времени должно хватить, чтобы перемотать всю страницу).
          setTimeout(setScrollListener, 700);
        })
        link.setEventListeners();
      })
    }
    //Если страница открывалась с хэш-ссылкой на данную секцию - ждем загрузки всей страницы (всех стилей) и проводим перемотку
    //с помощью функции класса Anchor.
    if (urlHash === anchorName) {
      window.addEventListener('load', anchor.goTo.bind(anchor));
    }
  });
};

export {makeLinks, nav, setScrollListener};
