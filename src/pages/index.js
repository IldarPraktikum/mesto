import Card from '../js/components/Card.js';
import FormValidator from '../js/components/FormValidator.js';
import PopupWithImage from '../js/components/PopupWithImage.js';
import Section from '../js/components/Section.js';
import UserInfo from '../js/components/UserInfo.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
import '../pages/index.css';
import {
  initialCards,
  profileButton,
  profileEdit,
  templateSelector,
  popupProfileSelector,
  popupAddCardSelector,
  popupImageSelector,
  listElementSelector,
  userInfoConfig,
  formPopupProfile,
  formPopupCard,
  config
} from '../js/utils/constants.js';


const userInfo = new UserInfo(userInfoConfig);

const popupImage = new PopupWithImage(popupImageSelector);


const section = new Section({
  items: initialCards,
  renderer: (element) => {
    const card = new Card(element, templateSelector, popupImage.open);
    return card.creatCard();
  }
}, listElementSelector)

section.addCardFromArray()

const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputValue())
  popupProfile.close();
})


const popupAddCard = new PopupWithForm(popupAddCardSelector, (evt) => {
  evt.preventDefault();
  section.addItem(section.renderer(popupAddCard.getInputValue()));
  popupAddCard.close();
})


popupImage.setEventListeners();
popupProfile.setEventListeners();
popupAddCard.setEventListeners();

const formPopupProfileValidator = new FormValidator(config, formPopupProfile);
formPopupProfileValidator.enableValidation();

const formPopupCardValidator = new FormValidator(config, formPopupCard);
formPopupCardValidator.enableValidation();


profileEdit.addEventListener('click', () => {
  formPopupProfileValidator.validateForm();
  popupProfile.setInputValue(userInfo.getUserInfo());
  popupProfile.open()
})                                                           /*открытие попапа профиля с нужными инпутами*/


profileButton.addEventListener('click', () => {
  formPopupCardValidator.validateForm();
  popupAddCard.open()
})                                                     /*открытие второго попапа */











