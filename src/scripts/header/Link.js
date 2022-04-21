// Класс "ссылка".
// Его задача обработать все ссылки в меню.
// Принимает для создания саму ссылку и колбек, который будет создан в классе "якорь".
// Единственная функция позволяет по клику на ссылку вызывать колбек из "сцепленной" секции.

export default class Link {
  constructor (linkItem, clickCallback) {
    this._linkItem = linkItem;
    this._clickCallback = clickCallback;
  }
  setEventListeners(evt) {
    this._linkItem.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._clickCallback();
    })
  }
};
