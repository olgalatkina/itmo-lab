export default class Nav {
  constructor (classOfNav) {
    this._classOfNav = classOfNav;
    this._nav = document.querySelector(`.${classOfNav}`);
    this._inputs = this._nav.querySelectorAll('input');
  }

  close () {
   this._inputs.forEach((input) => {
    input.checked = false;
   })
  }

  setEventListeners () {
    document.addEventListener("mousedown", (evt) => {
      const target = evt.target;
      const isItHeader = target === this._nav || this._nav.contains(target);
      if (!isItHeader) {
        this.close();
      }
    })
  }
}
