import { useEffect } from "react"
import { logout } from "../http/userApi"

export default function Logout() {
  useEffect(() => {
    logout()
  }, [])
  return <h1 className="mx-auto text-5xl my-auto">Вы вышли из аккаунта</h1>
}
