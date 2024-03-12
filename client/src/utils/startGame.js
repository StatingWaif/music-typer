import gameStore from "../store/gameStore"

export const startGame = (getGame, id) => {
  if (gameStore.id === id) {
    gameStore.startGame()
  } else {
    getGame(id).then(({ img, name, lyrics }) => {
      gameStore.setGameImg(img)
      gameStore.setGameName(name)
      gameStore.setFullText(lyrics)
      gameStore.setId(id)
      gameStore.startGame()
    })
  }
}
