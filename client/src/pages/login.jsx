import React from "react"
import useInput from "../hooks/useInput"
import Button from "../components/ui/button"
import addToLocalStorage from "../utils/localStorage/addToLocalStorage"
import { $authHost } from "../http"
import userStore from "../store/userStore"
import { login } from "../http/userApi"

export default function Login({ setRegistration }) {
  const username = useInput("")
  const password = useInput("")
  const handleClick = () => {
    login(username.value, password.value)
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
    </div>
  )
}
