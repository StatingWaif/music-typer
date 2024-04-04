import { $authHost, $host } from "."
import addToLocalStorage from "../utils/localStorage/addToLocalStorage"

export const registration = async (name, email, password) => {
  return $host
    .post("api/user/registration", {
      name,
      email,
      password,
    })
    .then((data) => addToLocalStorage(data.data.token, "token"))
}

export const login = async (name, password) => {
  return $authHost
    .post("api/user/login", {
      name,
      password,
    })
    .then((data) => addToLocalStorage(data.data.token, "token"))
}
