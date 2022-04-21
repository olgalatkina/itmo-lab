export default class Link {
  constructor (linkItem, clickCallback) {
    this._linkItem = linkItem;
    this._clickCallback = clickCallback;
  }
  setEventListeners() {
    this._linkItem.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._clickCallback();
    })
  }
};
