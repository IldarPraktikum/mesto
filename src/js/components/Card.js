export default class Card {
  constructor(cardData, templateSelector, openPopupImage, openDelete, changeLike) {
    this._link = cardData.link;
    this._name = cardData.name;
    this._myId = cardData.myid;
    this._likesLength = cardData.likes.length;
    this._likes = cardData.likes;
    this._ownerId = cardData.owner._id;
    this._cardId = cardData._id;
    this._templateSelector = templateSelector;
    this._openPopupImage = openPopupImage;
    this._openDelete = openDelete;
    this._changeLike = changeLike;
    this._cardElement = document.querySelector(this._templateSelector).content.querySelector('.listElement').cloneNode(true);
    this._image = this._cardElement.querySelector('.picture-popup-open');
    this._deleted = this._cardElement.querySelector('.delete');
    this._likeButton = this._cardElement.querySelector('.button-like');
    this._subtitle = this._cardElement.querySelector('.subtitle');
    this._counter = this._cardElement.querySelector('.elements__counter');
  }

  _useLike = () => {
    this._changeLike(this._likeButton, this._cardId)
  }          /*фнкция переключения кнопки лайк*/

  _useDeletedCard = () => {
    this._openDelete({ card: this, cardId: this._cardId });
  }        /*фнкция удаления */


  _useOpenPopupImage = () => {
    this._openPopupImage({title: this._name, link: this._link});
  }

  _setEventListener () {
    this._likeButton.addEventListener('click', this._useLike);
    this._deleted.addEventListener('click', this._useDeletedCard);
    this._image.addEventListener('click', this._useOpenPopupImage);
  }          /*фнкция навешивания слушателей */

  _deletedButtonVisible() {
    if (this._myId === this._ownerId) {
      this._deleted.style.display = 'block'
    } else {
      this._deleted.style.display = 'none'
    }
  }

  _checkLikeState() {
    this._likes.forEach(item => {
      if (item._id === this._myId) {
        this._likeButton.classList.add('button-like_active')
        return
      }
    })
    this._counter.textContent = this._likesLength
  }

  toggleLike(likes) {
    this._likeButton.classList.toggle('button-like_active');
    this._counter.textContent = likes.length
  }

  removeCardElement() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  creatCard() {
    this._image.src = this._link;
    this._image.alt = this._name;
    this._subtitle.textContent = this._name;
    this._checkLikeState();
    this._deletedButtonVisible();
    this._setEventListener();
    return this._cardElement;
  }
}         /*фнкция возвращает созданную карточку */
