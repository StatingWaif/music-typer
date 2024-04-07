import { $authHost, $host } from "."
import gameStore from "../store/gameStore"

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
    date: playedGame.date,
    pageViews: playedGame.pageViews,
    hasRus: playedGame.hasRus,
    hasEng: playedGame.hasEng,
    hasOther: playedGame.hasOther,
  }

  return $authHost.post("api/statistics/add", postData)
  // .then(() =>
  //   addToLocalStorage(
  //     [...getFromLocalStorage("history"), playedGame],
  //     "history"
  //   )
  // )
}

export const getAll = async () => {
  return $authHost.get("api/statistics/getAll")
}
