export default class UserInfo {
  constructor(userInfoConfig) {
    this._profileName = document.querySelector(userInfoConfig.profileNameSelector);
    this._profileActivity = document.querySelector(userInfoConfig.profileActivitySelector);
    this._profileAvatar = document.querySelector(userInfoConfig.profileAvatar);
  }

  getUserInfo() {
    return {name: this._profileName.textContent, job: this._profileActivity.textContent};
  }

  setUserInfo ({ name, job, avatar }) {
    this._profileAvatar.src = avatar
    this._profileName.textContent = name;
    this._profileActivity.textContent = job;
  }
}




