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

  _addClasses() {
    if (this._data.title === 'sberbank') {
      this._element.classList.add('project_type_finance');
    } else {
      this._element.classList.add('project_type_industry');
    }
  }

  generate() {
    this._getElement();
    this._setEventListeners();
    this._addClasses();

    const logo = this._element.querySelector('.project__logo');
    logo.style.backgroundImage = `url(../../images/partners/${this._data.image})`;

    const description = this._element.querySelector('.project__description');
    description.textContent = this._data.description;

    const link = this._element.querySelector('.project__link');
    link.href = this._data.link;

    return this._element;
  }
}
