// Класс "якорь".
// Его задача обработать все секции.
// getName возвращает имя секции (понадобится для привязки секции к ссылкам в меню).
// goTo является функцией, которая будет использоваться в колбеке при создании классов ссылок.
// goTo находит координаты секции и высоту меню (оно разное на разном разрешении) в момент клика.
// После этого высчитывает необходимые координаты и происходит переход в нужные координаты.

export default class Anchor {
  constructor (anchorItem, offsetGetter) {
    this._anchorItem = anchorItem;
    this._name = this._anchorItem.getAttribute('id');

    this._offsetGetter = offsetGetter;
  }
  _getHeaderOffset () {
    return this._offsetGetter();
  }
  getName() {
    return this._name;
  }
  goTo() {
    console.log('я зашел в гоуту!')
    console.log('высота хедера', this._getHeaderOffset(), 'координаты элемента', this._anchorItem.offsetTop)
    const headerOffset = this._getHeaderOffset();
    const elementPosition = this._anchorItem.offsetTop;
    window.scrollTo({
      top: elementPosition - headerOffset,
    })
  }
};
