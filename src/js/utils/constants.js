import arkhyz from '../../images/arhiz.jpg';
import chel from '../../images/chel.jpg';
import ivanovo from '../../images/ivan1.jpg';
import kamch from '../../images/kamch.jpg';
import baikal from '../../images/baikal.jpg';

const initialCards = [
  {
    title: 'Архыз',
    link: arkhyz
  },
  {
    title: 'Челябинская область',
    link: chel
  },
  {
    title: 'Иваново',
    link: ivanovo
  },
  {
    title: 'Камчатка',
    link: kamch
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link: baikal
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
