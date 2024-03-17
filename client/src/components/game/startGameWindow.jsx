import { useState } from "react"
import getSongById from "../../services/genius/getSongById"
import gameStore from "../../store/gameStore"
import { startGame } from "../../utils/startGame"
import Button from "../ui/button"
import Game from "./game"
import Image from "next/image"

export default function StartGameWindow({ id }) {
  const [started, setStarted] = useState(false)
  return (
    <>
      {started ? (
        <Game id={id} />
      ) : (
        <>
          {gameStore.id ? (
            <div className="bg-slate-600 min-h-52 w-2/3 mx-auto mt-5 text-2xl flex flex-col gap-3 p-5 items-center rounded-md">
              {gameStore.gameImg ? (
                <Image src={gameStore.gameImg} width={300} height={300} />
              ) : null}
              {gameStore.gameName ? (
                <p className="text-center">{gameStore.gameName}</p>
              ) : null}
              {gameStore.fullText ? (
                <p className="text-center">
                  Количество строк: {gameStore.fullText.length}
                </p>
              ) : null}
            </div>
          ) : null}
          <Button
            className="mx-auto w-52 h-14
             my-auto "
            onClick={() => {
              setStarted(true)
            }}
          >
            Начать
          </Button>
        </>
      )}
    </>
  )
}
