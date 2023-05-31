export default class UserInfo {
  constructor(configInfo) {
    this._profileName = document.querySelector(configInfo.profileNameSelector);
    this._profileActivity = document.querySelector(configInfo.profileActivitySelector);
  }

  getUserInfo() {
    return {name: this._profileName.textContent, job: this._profileActivity.textContent};
  }

  setUserInfo (dataUser) {
    this._profileName.textContent = dataUser.name;
    this._profileActivity.textContent = dataUser.job;
  }
}




