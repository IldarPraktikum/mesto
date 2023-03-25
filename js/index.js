const profileEdit = document.querySelector('.profile__edit');
const profilePopupEdit = document.querySelector('.popup');
const profilePopupCloseEdit = profilePopupEdit.querySelector('.popup__close');
const nameInput = profilePopupEdit.querySelector('.popup__input_name');
const nameInputJob = profilePopupEdit.querySelector('.popup__input_job');
const popupForm = profilePopupEdit.querySelector('.popup__form');
const nameUser = document.querySelector('.profile__name');
const nameАctivity = document.querySelector('.profile__activity');

profileEdit.addEventListener('click', () => {
  profilePopupEdit.classList.add('popup_opened');
  nameInput.value = nameUser.textContent;
  nameInputJob.value = nameАctivity.textContent;
});

profilePopupCloseEdit.addEventListener('click', () => {
  profilePopupEdit.classList.remove('popup_opened');
});


popupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  nameUser.textContent = nameInput.value;
  nameАctivity.textContent = nameInputJob.value;
  profilePopupEdit.classList.remove('popup_opened');
});
