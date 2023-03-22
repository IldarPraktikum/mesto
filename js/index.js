const profileCompletion = document.querySelector(".profile__completion");
const profilePopupCompletion = document.querySelector(".popup__completion");
const profilePopupCloseCompletion = profilePopupCompletion.querySelector(".popup__close");
const nameInput = profilePopupCompletion.querySelector(".popup__input_type_name");
const nameInputJob = profilePopupCompletion.querySelector(".popup__input_type_job");
const nameSubmit = profilePopupCompletion.querySelector(".popup__submit");
const popupForm = profilePopupCompletion.querySelector(".popup__form");
const nameUser = document.querySelector(".profile__name");
const nameАctivity = document.querySelector(".profile__activity");

profileCompletion.addEventListener("click", () => {
  profilePopupCompletion.classList.add("popup_open");
  nameInput.value = nameUser.textContent;
  nameInputJob.value = nameАctivity.textContent;
});

profilePopupCloseCompletion.addEventListener("click", () => {
  profilePopupCompletion.classList.remove('popup_open');
  nameInput.value = profilePopupCompletion.textContent;
  nameInputJob.value = profilePopupCompletion.textContent;
});


popupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  nameUser.textContent = nameInput.value;
  nameАctivity.textContent = nameInputJob.value;
profilePopupCompletion.classList.remove('popup_open');
});
