import { $authHost, $host } from "."
import gameStore from "../store/gameStore"
import addToLocalStorage from "../utils/localStorage/addToLocalStorage"
import getFromLocalStorage from "../utils/localStorage/getFromLocalStorage"

export const addGame = async (playedGame) => {
  const postData = {
    gameId: String(playedGame.id),
    name: playedGame.gameName,
    img: playedGame.gameImg,
    indexOfCurrentLine: playedGame.indexOfCurrentLine,
    indexOfCurrentWord: playedGame.indexOfCurrentWord,
    mistakes: playedGame.mistakes,
    seconds: playedGame.seconds,
    lines: playedGame.linesCount,
    completed: gameStore.fullEnd,
    isPoem: gameStore.isPoem,
  }

  return (
    $authHost
      .post("api/statistics/add", postData)
      // .then(() =>
      //   addToLocalStorage(
      //     [...getFromLocalStorage("history"), playedGame],
      //     "history"
      //   )
      // )
      .then(() => console.log(playedGame))
  )
}

export const getAll = async () => {
  return $authHost.get("api/statistics/getAll")
}
