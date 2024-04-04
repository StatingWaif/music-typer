import { makeAutoObservable } from "mobx"

class UserState {
  constructor() {
    makeAutoObservable(this)
  }

  _isAuth = false

  auth() {
    this._isAuth = true
  }
}
export default new UserState()
