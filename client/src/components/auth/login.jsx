import useInput from "../../hooks/useInput"
import { $authHost } from "../../http"
import Button from "../ui/button"

export default function Login() {
  const username = useInput("")
  const password = useInput("")
  const handleClick = () => {
    $authHost
      .post("api/user/login", {
        name: username.value,
        password: password.value,
      })
      .then((response) => {
        const token = response.data.token
        addToLocalStorage(token, "token")
      })
      .catch((data) =>
        console.log(data.response.status, data.response.statusText)
      )
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
      </div>
    </div>
  )
}
