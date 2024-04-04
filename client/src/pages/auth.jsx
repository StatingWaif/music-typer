import React, { useState } from "react"
import useInput from "../hooks/useInput"
import Button from "../components/ui/button"
import axios from "axios"
import addToLocalStorage from "../utils/localStorage/addToLocalStorage"
import { $host } from "../http"
import Login from "./login"
import Registration from "../components/auth/registration"

export default function Auth() {
  const [registration, setRegistration] = useState(false)

  return (
    <>
      {registration ? (
        <Registration />
      ) : (
        <Login setRegistration={setRegistration} />
      )}
    </>
  )
}
