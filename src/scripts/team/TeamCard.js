export default class TeamCard {
  constructor(data, selector) {
    this._data = data;
    this._selector = selector;
  }

  _getElement() {
    this._element = document
      .querySelector(this._selector)
      .content
      .querySelector('.team-card')
      .cloneNode(true);
  }

  generate() {
    this._getElement();
    const photo = this._element.querySelector('.team-card__photo');
    const firstName = this._element.querySelector('.team-card__name_firstname');
    const lastName = this._element.querySelector('.team-card__name_lastname');
    const description = this._element.querySelector('.team-card__desc');

    photo.src = this._data.image;
    photo.alt = `${this._data.name + ' ' + this._data.surname}`;
    firstName.textContent = this._data.name;
    lastName.textContent = this._data.surname;
    description.textContent = this._data.position;

    return this._element;
  }
}
