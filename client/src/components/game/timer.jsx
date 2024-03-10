import { useState, useEffect } from "react"
// import gameStore from "../store/gameStore"
import { observer } from "mobx-react-lite"
import formatTime from "../../utils/formatTime"
import gameStore from "../../store/gameStore"

export default observer(function Timer() {
  // const [seconds, setSeconds] = useState(0)
  // gameStore.

  useEffect(() => {
    const intervalId = setInterval(() => {
      // setSeconds((prevSeconds) => prevSeconds + 1)
      gameStore.incrementSeconds()
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return <p>Время: {formatTime(gameStore.seconds)}</p>
})
