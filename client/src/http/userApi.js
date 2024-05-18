import { $authHost, $host } from "."
import userStore from "../store/userStore"
import addToLocalStorage from "../utils/localStorage/addToLocalStorage"

export const registration = async (name, email, password) => {
  return (
    $host
      .post("api/user/registration", {
        name,
        email,
        password,
      })
      // .then((data) => addToLocalStorage(data.data.token, "token"))
      .then((data) => localStorage.setItem("token", data.data.token))
      .then(() => userStore.setAuth())
  )
}

export const login = async (name, password) => {
  return (
    $authHost
      .post("api/user/login", {
        name,
        password,
      })
      // .then((data) => addToLocalStorage(data.data.token, "token"))
      .then((data) => localStorage.setItem("token", data.data.token))

      .then(() => userStore.setAuth())
  )
}

export const logout = async () => {
  localStorage.removeItem("token")
  userStore.logout()
}

export const check = async () => {
  return $auth.get("api/user/auth")
}
