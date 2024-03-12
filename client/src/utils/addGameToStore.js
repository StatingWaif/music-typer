import gameStore from "../store/gameStore"

export const addGameToStore = (element) => {
  gameStore.setGameImg(element.img)
  gameStore.setGameName(element.name)
  gameStore.setFullText(element.lyrics)
  gameStore.setId(element.id || element.link)
}
