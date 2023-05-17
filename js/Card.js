export default class Card {
  constructor(cardData, templateSelector, openPopupImage) {
    this._cardData = cardData;
    this._link = cardData.link;
    this._name = cardData.name;
    this._templateSelector = templateSelector;
    this._openPopupImage = openPopupImage;
  }

  _getCloneTemplate() {
    return document.querySelector(this._templateSelector).content.querySelector('.listElement').cloneNode(true);
  }   /*метод создания клона темплейта*/

  _useLike = () => {
    this._likeButton.classList.toggle('button-like_active');
  }          /*фнкция переключения кнопки лайк*/

  _useDeletedCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  }        /*фнкция удаления */


  _useOpenPopupImage = () => {
    this._openPopupImage(this._cardData);
  }

  _setEventListener () {
    this._likeButton.addEventListener('click', this._useleLike);
    this._deleted.addEventListener('click', this._useDeletedCard);
    this._image.addEventListener('click', this._useOpenPopupImage);
  }          /*фнкция навешивания слушателей */

  creatCard() {
    this._cardElement = this._getCloneTemplate();
    this._image = this._cardElement.querySelector('.picture-popup-open');
    this._deleted = this._cardElement.querySelector('.delete');
    this._likeButton = this._cardElement.querySelector('.button-like');
    this._subtitle = this._cardElement.querySelector('.subtitle');
    this._image.src = this._link;
    this._image.alt = this._name;
    this._subtitle.textContent = this._name;
    this._setEventListener();
    return this._cardElement;
  }
}         /*фнкция возвращает переприсвоенные значения */
