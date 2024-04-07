import axios from "axios"
import { API_URL } from "../config"
import { logout } from "./userApi"

const $host = axios.create({
  baseURL: API_URL,
})

const $authHost = axios.create({
  baseURL: API_URL,
})

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)

const errorInterceptor = (error) => {
  return Promise.reject(error)
}

const authErrorInterceptor = (error) => {
  if (
    error?.response?.statusText === "Unauthorized" &&
    error?.response?.config?.headers?.authorization
  ) {
    logout()
    alert("Зайдите в аккаунт")
  }
  return errorInterceptor(error)
}

$host.interceptors.response.use(null, errorInterceptor)
$authHost.interceptors.response.use(null, authErrorInterceptor)

export { $host, $authHost }
