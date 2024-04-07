import { useState } from "react"
import useInput from "../../hooks/useInput"
import { login } from "../../http/userApi"
import Button from "../ui/button"
import clsx from "clsx"
import { useRouter } from "next/router"

export default function Login({ setRegistration }) {
  const username = useInput("")
  const password = useInput("")
  const [tryed, setTryed] = useState(false)
  const router = useRouter()
  // const [errorMessage, setErrorMessage] = useState("")

  const handleClick = () => {
    if (!username.value || !password.value) {
      setTryed(true)
      alert("Заполните все поля")
      return
      // setErrorMessage((prev) => prev + " Нет юзернейма")
    }
    // setErrorMessage((prev) => prev + " Нет пароля")
    login(username.value, password.value)
      .then(() => router.push("/play"))

      .catch((data) => {
        let message
        try {
          message = data.response.data.message
          const status = data.response.status
          status !== 200 && alert("Неверные данные")
        } catch (e) {
          message = data.message
          console.log(message)
          alert("Ошибка на сервере. Попробуйте позже")
        }
      })
  }
  return (
    <div className="flex justify-center my-auto">
      <div className="flex flex-col w-96 gap-5">
        <label>
          Логин{" "}
          <input
            {...username}
            className={clsx(
              username.className,
              tryed && !username.value && "bg-red-600"
            )}
          ></input>
        </label>
        <label>
          Пароль{" "}
          <input
            {...password}
            className={clsx(
              password.className,
              tryed && !password.value && "bg-red-600"
            )}
            type="password"
          ></input>
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
      {/* {errorMessage ? <div>{errorMessage}</div> : null} */}
    </div>
  )
}
