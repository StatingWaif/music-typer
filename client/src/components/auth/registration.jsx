import useInput from "../../hooks/useInput"
import { $host } from "../../http"
import { registration } from "../../http/userApi"
import addToLocalStorage from "../../utils/localStorage/addToLocalStorage"
import Button from "../ui/button"

export default function Registration() {
  const username = useInput("")
  const email = useInput("")
  const password = useInput("")
  const repeatPassword = useInput("")
  const handleClick = () => {
    if (password.value === repeatPassword.value) {
      registration(username.value, email.value, password.value).catch((data) =>
        console.log(data.response.data.message)
      )
    } else {
      alert("Пароли не совпадают!")
    }
  }
  return (
    <div className="flex justify-center my-auto">
      <div className="flex flex-col w-96 gap-5">
        <label>
          Логин <input {...username}></input>
        </label>
        <label>
          Почта <input {...email}></input>
        </label>
        <label>
          Пароль <input {...password} type="password"></input>
        </label>
        <label>
          Пароль еще раз <input {...repeatPassword} type="password"></input>
        </label>
        <Button className={"self-center"} onClick={handleClick}>
          Регистрация
        </Button>
      </div>
    </div>
  )
}
