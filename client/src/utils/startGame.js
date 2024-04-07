import gameStore from "../store/gameStore"
import { addGameToStore } from "./addGameToStore"

export const startGame = (getGame, id) => {
  if (gameStore.id == id) {
    gameStore.startGame()
  } else {
    getGame(id).then((game) => {
      addGameToStore(game)
      gameStore.startGame()
    })
  }
}
