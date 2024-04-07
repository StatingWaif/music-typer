import gameStore from "../../store/gameStore"
import formatTime from "../../utils/formatTime"

export default function EndGameWindow() {
  let speed = Math.floor((gameStore.symCount / gameStore.seconds) * 60)
  if (Number.isNaN(speed)) {
    speed = 0
  }
  return (
    <div className="bg-slate-600 h-fit w-fit mx-auto my-auto  text-2xl flex flex-col gap-3 p-5 items-center rounded-md ">
      <h1> IT'S OVER</h1>
      <p>Ваша скорость: {speed} зн/мин</p>
      <p>Количество ошибок: {gameStore.mistakes}</p>
      <p>Прошедшее время: {formatTime(gameStore.seconds)}</p>
    </div>
  )
}
