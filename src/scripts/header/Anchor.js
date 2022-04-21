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
    const headerOffset = this._getHeaderOffset();
    const elementPosition = this._anchorItem.offsetTop;
    window.scrollTo({
      top: elementPosition - headerOffset,
    })
  }
};
