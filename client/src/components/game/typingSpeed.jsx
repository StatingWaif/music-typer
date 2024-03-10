import React from "react"
// import gameStore from "../store/gameStore"
import { observer } from "mobx-react-lite"
import gameStore from "../../store/gameStore"

export default observer(function TypingSpeed() {
  return (
    <div>
      {gameStore.seconds ? (
        <p>
          Текущая скорость:{" "}
          {Math.floor((gameStore.symCount / gameStore.seconds) * 60)} зн/мин
        </p>
      ) : (
        <p>Текущая скорость: {0} зн/мин</p>
      )}
    </div>
  )
})
