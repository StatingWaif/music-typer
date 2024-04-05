import gameStore from "../store/gameStore"
import { addGameToStore } from "./addGameToStore"

export const startGame = (getGame, id, isPoem = false) => {
  if (gameStore.id == id) {
    gameStore.startGame()
  } else {
    getGame(id).then(({ img, name, lyrics }) => {
      addGameToStore({ img, name, lyrics, id, isPoem })
      gameStore.startGame()
    })
  }
}
