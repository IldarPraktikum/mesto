const initialCards = [
  {
    place: 'Архыз',
    link: './images/arhiz.jpg'
  },
  {
    place: 'Челябинская область',
    link: './images/chel.jpg'
  },
  {
    place: 'Иваново',
    link: './images/ivan1.jpg'
  },
  {
    place: 'Камчатка',
    link: './images/kamch.jpg'
  },
  {
    place: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    place: 'Байкал',
    link: './images/baikal.jpg'
  }
];

const profileEdit = document.querySelector('.profile__edit');
const profileButton = document.querySelector('.profile__button');

const templateSelector = '#cardElement';
const popupProfileSelector = '.profile-popup';
const popupAddCardSelector = '.popup-card';
const popupImageSelector = '.popup-picture';
const listElementSelector = '.element';

const userInfoConfig = {
  profileNameSelector: '.profile__name',
  profileActivitySelector: '.profile__activity',
}

const formPopupProfile = document.forms["profile-form"];

const formPopupCard = document.forms["card-form"];

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_text-invalid',
  errorClass: 'popup__error_visible'
};

export {
  initialCards,
  profileEdit,
  profileButton,
  templateSelector,
  popupProfileSelector,
  popupAddCardSelector,
  popupImageSelector,
  listElementSelector,
  userInfoConfig,
  formPopupProfile,
  formPopupCard,
  config
};
