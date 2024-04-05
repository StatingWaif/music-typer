import { makeAutoObservable } from "mobx"

class UserState {
  constructor() {
    makeAutoObservable(this)
  }
  _username = null
  _email = null
  _avatar = null
  _isAuth = false

  setAuth() {
    this._isAuth = true
  }
  logout() {
    this._avatar = null
    this._email = null
    this._isAuth = false
    this._username = null
  }
  get isAuth() {
    return this._isAuth
  }

  set username(val) {
    this._username = val
  }
  get username() {
    return this._username
  }
  set email(val) {
    this._email = val
  }
  get email() {
    return this._email
  }
  set avatar(val) {
    this._avatar = val
  }
  get avatar() {
    return this._avatar
  }
}
export default new UserState()
