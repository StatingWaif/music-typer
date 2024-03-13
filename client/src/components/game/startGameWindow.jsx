import getSongById from "../../services/genius/getSongById"
import gameStore from "../../store/gameStore"
import { startGame } from "../../utils/startGame"
import Button from "../ui/button"

export default function StartGameWindow() {
  return (
    <>
      <div className="bg-slate-600 h-52 w-1/3 mx-auto mt-32 text-2xl flex flex-col gap-3 p-5 items-center rounded-md">
        <h1 className="">Вы готовы начать игру?</h1>
        <p className="text-center">{gameStore.gameName}</p>
        <p>Количество строк: {gameStore.fullText.length}</p>
      </div>
      <Button
        className="mx-auto scale-150 mt-36"
        onClick={() => {
          // startGame(getSongById, gameStore.id)
        }}
      >
        Начать
      </Button>
    </>
  )
}
