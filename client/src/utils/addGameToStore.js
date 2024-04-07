import gameStore from "../store/gameStore"

export const addGameToStore = (element) => {
  if (element.additionalInfo) {
    gameStore.setDate(element.additionalInfo.date)
    gameStore.setPageViews(element.additionalInfo.pageViews)
  } else {
    gameStore.setDate(null)
    gameStore.setPageViews(null)
  }
  gameStore.setGameImg(element.img)
  gameStore.setGameName(element.name)
  gameStore.setUsedLanguages(element.languages)
  gameStore.setFullText(element.lyrics)
  gameStore.setId(element.gameId)
  gameStore.setIsPoem(element.isPoem)
}
