// import gameStore from "../store/gameStore"
import gameStore from "../../store/gameStore"
import formatTime from "../../utils/formatTime"

export default function EndGameWindow() {
  return (
    <div className="bg-slate-600 h-52 w-1/3 mx-auto my-auto  text-2xl flex flex-col gap-3 p-5 items-center rounded-md ">
      <h1> IT'S SO OVER</h1>
      <p>
        Ваша скорость:{" "}
        {Math.floor((gameStore.symCount / gameStore.seconds) * 60)} зн/мин
      </p>
      <p>Количество ошибок: {gameStore.mistakes}</p>
      <p>Прошедшее время: {formatTime(gameStore.seconds)}</p>
      <p></p>
    </div>
  )
}
