import { $authHost, $host } from "."
import addToLocalStorage from "../utils/localStorage/addToLocalStorage"

export const registration = async (name, email, password) => {
  $host
    .post("api/user/registration", {
      name,
      email,
      password,
    })
    .then((response) => addToLocalStorage(response.data.token, "token"))
    .catch((data) => console.log(data))
}

export const login = async (name, password) => {
  $authHost
    .post("api/user/login", {
      name,
      password,
    })
    .then((response) => addToLocalStorage(response.data.token, "token"))
    .catch((data) => console.log(data))
}
