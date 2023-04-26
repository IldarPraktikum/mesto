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
const cardPicturePopupContainer = document.querySelector('.popup-picture__container');
const cardPicturePopupOpen = document.querySelector('.picture-popup-open');
const cardPicturePopupCaption = document.querySelector('.popup-picture__caption');
const cardPopupPicture = document.querySelector('.popup-picture__open');

const cardElement = document.querySelector('#cardElement').content;
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
  resetProfileForm(config, formPopupProfile);
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

const popupParts = document.querySelectorAll('.popup');
popupParts.forEach(element => element.addEventListener('click', closePopupByTapBehindOverlay));

closeButtons.forEach((element) => {
  const popup = element.closest('.popup');
  element.addEventListener('click', () => {
    closePopup(popup);
  })
})                                                    /*закрытие попапа кнопокой*/

profileButton.addEventListener('click', () => {
  resetCardForm(config, formPopupCard);
  openPopup(cardPopup);
})                                                     /*открытие второго попапа */

function creatCard(object) {                                                        /*создаем карточку */
  const liElement = cardElement.querySelector('.listElement').cloneNode(true);
  const image = liElement.querySelector('.picture-popup-open');
  const deleted = liElement.querySelector('.delete');
  const likeButton = liElement.querySelector('.button-like');

  image.src = object.link;
  image.alt = object.name;
  liElement.querySelector('.subtitle').textContent = object.name;

  likeButton.addEventListener('click', () => likeButton.classList.toggle('button-like_active'));      /*меняем цвет лайка */

  deleted.addEventListener('click', () => deleted.closest('.listElement').remove());           /*удаляем картинку при нажатии на корзинку */

  image.addEventListener('click', () => {
    cardPopupPicture.src = object.link;
    cardPopupPicture.alt = object.name;
    cardPicturePopupCaption.textContent = object.name;
    openPopup(cardPicturePopup);                                            /*открытие картинки */
  });
  return liElement;                                            /*вернул результат в список*/
}

initialCards.forEach((unit) => {
  const card = creatCard(unit);
  listElement.append(card);
})                                                      /*разделили массив на элементы и вложили в функцию и разметку*/

formPopupCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardData = { name: popupInputCardTitle.value, link: popupInputCardResource.value };
  listElement.prepend(creatCard(cardData));
  closePopup(cardPopup);
  evt.target.reset();
});                                                       /*настроил инпуты для сохранения картинок*/
