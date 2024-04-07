import { useRouter } from "next/router"
import useInput from "../../hooks/useInput"
import { $host } from "../../http"
import { registration } from "../../http/userApi"
import Button from "../ui/button"

export default function Registration() {
  const username = useInput("")
  const email = useInput("")
  const password = useInput("")
  const repeatPassword = useInput("")
  const router = useRouter()
  const handleClick = () => {
    if (password.value === repeatPassword.value) {
      registration(username.value, email.value, password.value)
        .then(() => router.push("/play"))
        // .catch(() => alert("Аккаунт уже существует"))
        .catch((data) => {
          if (data.response.data.message === "User already exists") {
            alert("Пользователь уже существует")
          } else {
            alert("Произошла некая ошибка")
          }
        })
      // .catch((data) =>
      //   console.log(data.response.data.message)
      // )
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
