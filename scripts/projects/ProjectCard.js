export default class ProjectCard {
  constructor(data, selector) {
    this._data = data;
    this._selector = selector;

    this._toggleSize = this._toggleSize.bind(this);
  }

  _getElement() {
    this._element = document
      .querySelector(this._selector)
      .content
      .querySelector('.project')
      .cloneNode(true);
  }

  _toggleSize() {
    this._element.classList.toggle('project_extended');
  }

  _setEventListeners() {
    const sizeButton = this._element.querySelector('.project__btn-extend');
    sizeButton.addEventListener('click', this._toggleSize);
  }

  generate() {
    this._getElement();
    this._setEventListeners();

    this._element.classList.add(`project_type_${this._data.type}`);

    const logo = this._element.querySelector('.project__logo');
    logo.classList.add(`project__logo_name_${this._data.title}`);

    const description = this._element.querySelector('.project__description');
    description.textContent = this._data.description;

    const link = this._element.querySelector('.project__link');
    link.href = this._data.link;

    return this._element;
  }
}
