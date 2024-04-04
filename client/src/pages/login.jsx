import React, { useState } from "react"
import useInput from "../hooks/useInput"
import Button from "../components/ui/button"
import addToLocalStorage from "../utils/localStorage/addToLocalStorage"
import { $authHost } from "../http"
import userStore from "../store/userStore"
import { login } from "../http/userApi"

export default function Login({ setRegistration }) {
  const username = useInput("")
  const password = useInput("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleClick = () => {
    if (!username.value) {
      setErrorMessage((prev) => prev + " Нет юзернейма")
    }
    if (!password.value) {
      setErrorMessage((prev) => prev + " Нет пароля")
    }
    login(username.value, password.value).catch((data) => {
      let message
      try {
        message = data.response.data.message
        const status = data.response.status
      } catch (e) {
        message = data.message
      }
    })
  }
  return (
    <div className="flex justify-center my-auto">
      <div className="flex flex-col w-96 gap-5">
        <label>
          Логин <input {...username}></input>
        </label>
        <label>
          Пароль <input {...password} type="password"></input>
        </label>
        <Button className={"self-center"} onClick={handleClick}>
          Войти
        </Button>
        <Button
          className={"self-end mt-5"}
          onClick={() => setRegistration(true)}
        >
          Нет аккаунта
        </Button>
      </div>
      {errorMessage ? <div>{errorMessage}</div> : null}
    </div>
  )
}
