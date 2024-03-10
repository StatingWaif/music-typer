import React from "react"
// import gameStore from "../store/gameStore"
import TypingSpeed from "./typingSpeed"
import Timer from "./timer"
import clsx from "clsx"
import { observer } from "mobx-react-lite"
import Button from "../ui/button"
import endGame from "../../utils/endGame"
import gameStore from "../../store/gameStore"

export default observer(function GameInfo({ className }) {
  return (
    <span className={clsx(className, "gap-5 flex flex-col")}>
      {/* <Card img={gameStore.songImg} name={gameStore.songName} className /> */}
      <div className="text-2xl flex flex-col gap-2 max-w-fit">
        <p className="max-w-xl">
          Название:{" "}
          <span className="text-orange-400">{gameStore.songName}</span>
        </p>
        <p>Количество ошибок: {gameStore.mistakes}</p>
        {/* <p>Текущая скорость: {gameStore.currentSpeed} зн/мин</p> */}
        <TypingSpeed />
        <Timer />
        <Button onClick={endGame} className={"mt-5"}>
          Закончить
        </Button>
      </div>
    </span>
  )
})
