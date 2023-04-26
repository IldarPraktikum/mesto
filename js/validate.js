function setInputValidState (config, input, errorElement) {
  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
}

function setInputInvalidState (config, input, errorElement) {
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = input.validationMessage;
}

function checkInputValidity(config, input, form) {                                                 /*функция с условием валидности инпутов в форме*/
  const errorElement = form.querySelector(`#error-${input.id}`);
  if (input.checkValidity()) {
    setInputValidState (config, input, errorElement);
  } else {
    setInputInvalidState (config, input, errorElement);
  }
}

function disableButton({ inactiveButtonClass }, button) {
  button.setAttribute('disabled', '');
  button.classList.add(inactiveButtonClass);
}

function enableButton({ inactiveButtonClass }, button) {
  button.removeAttribute('disabled');
  button.classList.remove(inactiveButtonClass);
}

function toggleButtonValidity({submitButtonSelector, ...rest}, form) {                /*функция с условием активации и деактивации submit*/
  const submitButton = form.querySelector(submitButtonSelector);

  if (form.checkValidity()) {
    enableButton(rest, submitButton);
  } else {
    disableButton(rest, submitButton);
  }
}

function setSubmitListener(config, form) {                           /*настраиваем слушатель сабмита*/
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    toggleButtonValidity(config, form);
  });
}

function resetProfileForm(config, form) {
  toggleButtonValidity(config, form);
  const inputs = form.querySelectorAll(config.inputSelector);
  const inputsArray = Array.from(inputs);
  inputsArray.forEach(function (input) {
      checkInputValidity(config, input, form);
  });
}

function resetCardForm(config, form) {
  toggleButtonValidity(config, form);
}

function enableValidation({formSelector, inputSelector, ...rest}) {            /*передаем параметры, использвем rest. Настраиваем слушатель инпута*/
  const forms = Array.from(document.querySelectorAll(formSelector));

  forms.forEach((form) => {
    setSubmitListener(rest, form);
    const inputs = form.querySelectorAll(inputSelector);
    const inputsArray = Array.from(inputs);
    inputsArray.forEach(function (input) {
      input.addEventListener('input', () => {
        checkInputValidity(config, input, form);
        toggleButtonValidity(rest, form);
      });
    });
  });
}

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_text-invalid',
  errorClass: 'popup__error_visible'
};

enableValidation(config);                                           /*функция, которая отвечает за включение валидации всех форм*/






