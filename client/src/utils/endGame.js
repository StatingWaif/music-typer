import axios from "axios"
import gameStore from "../store/gameStore"
import addToLocalStorage from "./localStorage/addToLocalStorage"
import getFromLocalStorage from "./localStorage/getFromLocalStorage"

export default function endGame() {
  gameStore.endGame()
  const dataNames = [
    "id",
    "gameName",
    "gameImg",
    "indexOfCurrentLine",
    "indexOfCurrentWord",
    "mistakes",
    "seconds",
    "symCount",
    "linesCount",
  ]
  const playedGame = dataNames.reduce((res, name) => {
    res[name] = gameStore[name]
    return res
  }, {})
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
  axios
    .post("http://localhost:7000/api/statistics/add", postData, {
      headers: {
        Authorization: `Bearer ${getFromLocalStorage("token")}`,
      },
    })
    .then(() => console.log(playedGame))
  addToLocalStorage([...getFromLocalStorage("history"), playedGame], "history")
}
