//Класс обрабатывающий все объекты в меню
//проверяет текущую секцию и добавляет/удаляет классы для соответствующей кнопки в меню
export default class CurrentSectionLink {
  constructor(linkItem, applyCssName) {
    this._linkItem = linkItem;
    this._applyCssName = applyCssName;
    this._name = this._linkItem.getAttribute("name");
  }
  getName() {
    return this._name;
  }
  addClass() {
    this._linkItem.classList.add(this._applyCssName);
  }
  _deleteClass() {
    this._linkItem.classList.remove(this._applyCssName);
  }
  setEventListeners() {
    window.addEventListener("hashchange", (evt) => {
      const currentHash = evt.newURL.split("#")[1];
      if (currentHash === this._name) {
        this.addClass();
      } else if (this._linkItem.classList.contains(this._applyCssName)) {
        this._deleteClass();
      }
    });
  }
}
