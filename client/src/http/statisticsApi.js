import { $authHost, $host } from "."

export const addGame = async (playedGame) => {
  const postData = {
    mistakes: playedGame.mistakes,
    name: playedGame.gameName,
    seconds: playedGame.seconds,
    words: playedGame.indexOfCurrentWord,
    completed: false,
    gameId: String(playedGame.id),
    img: playedGame.gameImg,
    lines: playedGame.linesCount,
  }

  return $authHost
    .post("api/statistics/add", postData)
    .then(() =>
      addToLocalStorage(
        [...getFromLocalStorage("history"), playedGame],
        "history"
      )
    )
    .then(() => console.log(playedGame))
}

export const getAll = async () => {
  return $authHost.get("api/statistics/getAll")
}
