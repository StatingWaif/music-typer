import axios from "axios"
import { API_URL } from "../config"

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

$host.interceptors.response.use(null, errorInterceptor)
$authHost.interceptors.response.use(null, errorInterceptor)

export { $host, $authHost }
