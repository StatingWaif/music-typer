import React from "react"
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
      <div className="text-2xl flex flex-col gap-2 ">
        <p className="">
          Название:{" "}
          <span className="text-orange-400">{gameStore.gameName}</span>
        </p>
        <p>Количество ошибок: {gameStore.mistakes}</p>
        <TypingSpeed />
        <p>
          Строка: {gameStore.indexOfCurrentLine + 1} из{" "}
          {gameStore.fullText.length}
        </p>
        <Timer />
        <Button onClick={endGame} className={"mt-5 self-center lg:self-start"}>
          Закончить
        </Button>
      </div>
    </span>
  )
})
