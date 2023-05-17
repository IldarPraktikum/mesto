import Card from './Card.js';
import FormValidator from './FormValidator.js';

const profileEdit = document.querySelector('.profile__edit');
const closeButtons = document.querySelectorAll('.popup__close');
const nameInput = document.querySelector('#name');
const nameInputJob = document.querySelector('#job');
const profilePopup = document.querySelector('.profile-popup');
const formPopupProfile = document.forms["profile-form"];
const nameUser = document.querySelector('.profile__name');
const nameАctivity = document.querySelector('.profile__activity');

const profileButton = document.querySelector('.profile__button');
const cardPopup = document.querySelector('.popup-card');
const formPopupCard = document.forms["card-form"];
const popupInputCardTitle = document.querySelector('#named');
const popupInputCardResource = document.querySelector('#resource');
const cardPicturePopup = document.querySelector('.popup-picture');
const cardPicturePopupCaption = document.querySelector('.popup-picture__caption');
const cardPopupPicture = document.querySelector('.popup-picture__open');

const templateSelector = '#cardElement';
const listElement = document.querySelector('.element');

const initialCards = [
  {
    name: 'Архыз',
    link: './images/arhiz.jpg'
  },
  {
    name: 'Челябинская область',
    link: './images/chel.jpg'
  },
  {
    name: 'Иваново',
    link: './images/ivan1.jpg'
  },
  {
    name: 'Камчатка',
    link: './images/kamch.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: './images/baikal.jpg'
  }
];

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_text-invalid',
  errorClass: 'popup__error_visible'
};

const formPopupProfileValidator = new FormValidator(config, formPopupProfile);
formPopupProfileValidator.enableValidation();

const formPopupCardValidator = new FormValidator(config, formPopupCard);
formPopupCardValidator.enableValidation();

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
}                                                                                /*функция открытия*/

function closePopup(popup) {
  popup.classList.remove('popup_opened');
     document.removeEventListener('keydown', closePopupByEscape);
}                                                                               /*функция закрытия*/

profileEdit.addEventListener('click', () => {
  openPopup(profilePopup);
  nameInput.value = nameUser.textContent;
  nameInputJob.value = nameАctivity.textContent;
  formPopupProfileValidator.validateForm()
})                                                           /*открытие попапа профиля с нужными инпутами*/

formPopupProfile.addEventListener('submit', (event) => {
  event.preventDefault();
  nameUser.textContent = nameInput.value;
  nameАctivity.textContent = nameInputJob.value;
  closePopup(profilePopup);
});                                                     /*закрытие попапа профиля с нужными инпутами*/

function closePopupByEscape(evt) {                                                   /*закрытие попапа по Escape*/
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function closePopupByTapBehindOverlay(evt) {                               /*закрытие попапа по нажатию за пределами оверлея*/
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

function openPopupImage(cardData) {
  cardPopupPicture.src = cardData.link;
  cardPopupPicture.alt = cardData.name;
  cardPicturePopupCaption.textContent = cardData.name;
  openPopup(cardPicturePopup);
}

const popupParts = document.querySelectorAll('.popup');
popupParts.forEach(element => element.addEventListener('click', closePopupByTapBehindOverlay));

closeButtons.forEach((element) => {
  const popup = element.closest('.popup');
  element.addEventListener('click', () => {
    closePopup(popup);
  })
})                                                    /*закрытие попапа кнопокой*/

profileButton.addEventListener('click', () => {
  formPopupCard.reset()
  formPopupCardValidator.validateForm()
  openPopup(cardPopup);
})                                                     /*открытие второго попапа */


function addCard(container, card) {
  container.prepend(card);
}

initialCards.forEach((element) => {
  const card = new Card(element, templateSelector, openPopupImage);
  addCard(listElement, card.creatCard());
})                                                      /*разделили массив на элементы и вложили в функцию и разметку*/

formPopupCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardData = { name: popupInputCardTitle.value, link: popupInputCardResource.value };
  const card = new Card(cardData, templateSelector, openPopupImage);
  addCard(listElement, card.creatCard());
  closePopup(cardPopup);
  evt.target.reset();
});                                                       /*настроил инпуты для сохранения картинок*/








