const initialCards = [
  {
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const profileEdit = document.querySelector('.profile__edit');
const profileButton = document.querySelector('.profile__button');
const avatarElement = document.querySelector('.profile__avatar-button');

const templateSelector = '#cardElement';
const popupProfileSelector = '.profile-popup';
const popupAddCardSelector = '.popup-card';
const popupImageSelector = '.popup-picture';
const listElementSelector = '.element';

const userInfoConfig = {
  profileNameSelector: '.profile__name',
  profileActivitySelector: '.profile__activity',
  profileAvatar: '.profile__avatar',
}

const formPopupProfile = document.forms["profile-form"];

const formPopupCard = document.forms["card-form"];

const formPopupAvatar = document.forms["avatar-form"];

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
  avatarElement,
  profileButton,
  templateSelector,
  popupProfileSelector,
  popupAddCardSelector,
  popupImageSelector,
  listElementSelector,
  userInfoConfig,
  formPopupProfile,
  formPopupCard,
  formPopupAvatar,
  config
};
