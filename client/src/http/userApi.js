import { $authHost, $host } from "."
import userStore from "../store/userStore"

export const registration = async (name, password) => {
  return $host
    .post("api/user/registration", {
      name,
      password,
    })
    .then((data) => localStorage.setItem("token", data.data.token))
    .then(() => userStore.setAuth())
}

export const login = async (name, password) => {
  return $authHost
    .post("api/user/login", {
      name,
      password,
    })
    .then((data) => localStorage.setItem("token", data.data.token))

    .then(() => userStore.setAuth())
}

export const logout = async () => {
  localStorage.removeItem("token")
  userStore.logout()
}

export const check = async () => {
  return $authHost.get("api/user/auth")
}
