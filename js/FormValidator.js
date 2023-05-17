export default class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
    this._button = this._form.querySelector(this._submitButtonSelector);
    this._inputList = this._form.querySelectorAll(this._inputSelector);
  }

  _setInputInvalidState(input) {
    input.classList.add(this._inputErrorClass);
    const errorTextElement = this._form.querySelector(`#error-${input.id}`);
    errorTextElement.textContent = input.validationMessage;
  }

  _setInputValidState(input) {
    input.classList.remove(this._inputErrorClass);
    const errorTextElement = this._form.querySelector(`#error-${input.id}`);
    errorTextElement.textContent = '';
  }

  _enableButton() {
    this._button.removeAttribute('disabled');
    this._button.classList.remove(this._inactiveButtonClass);
  }

  _disableButton() {
    this._button.setAttribute('disabled', '');
    this._button.classList.add(this._inactiveButtonClass);
  }

  _checkInputValidity(input) {                           /*функция с условием валидности инпутов в форме*/
    if (input.checkValidity()) {
      this._setInputValidState(input);
    } else {
      this._setInputInvalidState(input);
    }
  }

  _toggleButtonValidity() {                             /*функция с условием активации и деактивации submit*/
    if (this._form.checkValidity()) {
      this._enableButton();
    } else {
      this._disableButton();
    }
  }

  _setInputListener() {                                /*настраиваем слушатель сабмита*/
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input)
        this._toggleButtonValidity()
      })
    })
  }

  enableValidation() {                                /*функция, которая отвечает за включение валидацию всех форм*/
    this._setInputListener();
  }

  validateForm() {
    this._toggleButtonValidity();
    this._inputList.forEach(input => {
      this._setInputValidState(input)
    });
  }  /*функция, которая проверяет форму*/
}


