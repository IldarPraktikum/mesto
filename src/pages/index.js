import Card from '../js/components/Card.js';
import FormValidator from '../js/components/FormValidator.js';
import PopupWithImage from '../js/components/PopupWithImage.js';
import Section from '../js/components/Section.js';
import UserInfo from '../js/components/UserInfo.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
import PopupWithDeleteForm from '../js/components/PopupWithDeleteForm.js';
import '../pages/index.css';
import Api from '../js/components/Api.js';
import {
  profileButton,
  profileEdit,
  avatarElement,
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
} from '../js/utils/constants.js';
const popupDeleteSelector = '.popup-delete';
const popupEditAvatarSelector = '.popup-avatar';
const myUser = {};


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-68',
  headers: {
    authorization: 'ca31682b-267d-431c-88fb-c7ebca19aed7',
    'Content-Type': 'application/json'
  }
});


const popupDelete = new PopupWithDeleteForm(popupDeleteSelector, ({ card, cardId }) => {
  api.deleteCard(cardId)
  .then(() => {
    card.removeCardElement()
    popupDelete.close()
  })
  .catch((error) => console.error(`Ошибка при удалении карточки ${error}`))
  .finally(() => popupDelete.setupDefaultText())
});

popupDelete.setEventListeners()

const userInfo = new UserInfo(userInfoConfig);

const popupImage = new PopupWithImage(popupImageSelector);

function creatNewCard(element) {
  const card = new Card(element, templateSelector, popupImage.open, popupDelete.open, (likeElement, cardId) => {
    if (likeElement.classList.contains('button-like_active')) {
      api.deleteLike(cardId)
      .then(res => {
        card.toggleLike(res.likes)
      })
      .catch((error) => console.error(`Ошибка при снятии лайка ${error}`))
    } else {
      api.addLike(cardId)
      .then(res => {
        card.toggleLike(res.likes)
      })
      .catch((error) => console.error(`Ошибка при добавлении лайка ${error}`))
    }

  });
  return card.creatCard();
}

const section = new Section((element) => {
    section.addItemAppend(creatNewCard(element))
}, listElementSelector)

const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  api.setUserInfo(data)
  .then(res => {
    userInfo.setUserInfo({ name: res.name, job: res.about, avatar: res.avatar });
    popupProfile.close()
  })
  .catch((error) => console.error(`Ошибка при редактировании профиля ${error}`))
  .finally(() => popupProfile.setupDefaultText())
});

const popupAddCard = new PopupWithForm(popupAddCardSelector, (data) => {
  api.addCard(data)
  .then(dataCard => {
    dataCard.myid = myUser.id;
    section.addItemPrepend(creatNewCard(dataCard))
    popupAddCard.close()
  })
  .catch((error) => console.error(`Ошибка при создании новой карточки ${error}`))
  .finally(() => popupEditAvatar.setupDefaultText())
});

const popupEditAvatar = new PopupWithForm(popupEditAvatarSelector, (data) => {
  api.setNewAvatar(data)
  .then(res=> {
    userInfo.setUserInfo({ name: res.name, job: res.about, avatar: res.avatar });
    popupEditAvatar.close()
  })
  .catch((error => console.error(`Ошибка при обновлении аватара ${error}`)))
  .finally(() => popupEditAvatar.setupDefaultText())
});

popupEditAvatar.setEventListeners()
popupImage.setEventListeners();
popupProfile.setEventListeners();
popupAddCard.setEventListeners();

const formPopupProfileValidator = new FormValidator(config, formPopupProfile);
formPopupProfileValidator.enableValidation();

const formPopupCardValidator = new FormValidator(config, formPopupCard);
formPopupCardValidator.enableValidation();

const formPopupAvatarValidator = new FormValidator(config, formPopupAvatar);
formPopupAvatarValidator.enableValidation();

profileEdit.addEventListener('click', () => {
  formPopupProfileValidator.resetValidationState();
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open()
})                                                           /*открытие попапа профиля с нужными инпутами*/


profileButton.addEventListener('click', () => {
  formPopupCardValidator.resetValidationState();
  popupAddCard.open()
})                                                     /*открытие второго попапа */

avatarElement.addEventListener('click', () => {
  popupEditAvatar.open()
})

Promise.all([api.getInfo(), api.getCards()])
.then(([dataUser, dataCard]) => {
  myUser.id = dataUser._id;
  dataCard.forEach(element => element.myid = dataUser._id)
  userInfo.setUserInfo({ name: dataUser.name, job: dataUser.about, avatar: dataUser.avatar })
  section.addCardFromArray(dataCard);
})
.catch((error) => console.error(`Ошибка при создании начальных данных страницы ${error}`))

