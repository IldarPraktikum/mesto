import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup-picture__open');
    this._imagePopupCaption = this._popup.querySelector('.popup-picture__caption')
  }

  open = (cardData) => {
    this._popupImage.src = cardData.link;
    this._popupImage.alt = cardData.place;
    this._imagePopupCaption.textContent = cardData.place;
    super.open()
  }
}
