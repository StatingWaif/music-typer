import axios from "axios"
import gameStore from "../store/gameStore"
import addToLocalStorage from "./localStorage/addToLocalStorage"
import getFromLocalStorage from "./localStorage/getFromLocalStorage"
import { addGame } from "../http/statisticsApi"
import userStore from "../store/userStore"

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
    "isPoem",
  ]
  const playedGame = dataNames.reduce((res, name) => {
    res[name] = gameStore[name]
    return res
  }, {})

  userStore.isAuth && addGame(playedGame).catch(console.log)
}
