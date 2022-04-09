export class PublicationsCard {
  constructor(data, selector) {
    this._data = data;
    this._selector = selector;
  }

  _showToolTip = () => {
    this._tooltip.classList.toggle('tooltip_active');
  }

  _hideToolTip = () => {
    this._tooltip.classList.remove('tooltip_active')
  }

  _setEventListeners() {
    this._shareCard = this._element.querySelector('.card-meta__share');
    this._tooltip = this._element.querySelector('.tooltip');
    this._shareCard.addEventListener('click', this._showToolTip);
    this._element.addEventListener('mouseleave', this._hideToolTip);
  }

  _getElement() {
    this._element = document
      .querySelector(this._selector)
      .content
      .querySelector('.publications-card')
      .cloneNode(true);
  }

  generate() {
    this._getElement();

    this._imageCard = this._element.querySelector('.publications-card__image');
    this._imageCard.src = `./images/publication/${this._data.image}`;

    this._nameCard = this._element.querySelector('.publications-card__name');
    this._nameCard.textContent = this._data.title;
    this._imageCard.alt = this._data.title;

    this._autorsCard = this._element.querySelector('.publications-card__autors');
    this._autorsCard.textContent = this._data.autors;

    this._descCard = this._element.querySelector('.publications-card__desc');
    this._descCard.textContent = this._data.description;

    this._linkCard = this._element.querySelector('.card-meta__link-more');
    this._linkCard.href = this._data.link;

    this._setEventListeners();

    return this._element;
  }

}
