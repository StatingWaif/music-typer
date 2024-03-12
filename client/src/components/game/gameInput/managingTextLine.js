import gameStore from "../../../store/gameStore"
import endGame from "../../../utils/endGame"

export const managingTextLine = (typedWord) => {
  if (typedWord === gameStore.currentWord + " ") {
    if (
      gameStore.indexOfCurrentLine === gameStore.fullText.length - 1 &&
      gameStore.indexOfCurrentWord === gameStore.currentLine.length - 1
    ) {
      endGame()
      return
    }
    if (gameStore.indexOfCurrentWord !== gameStore.currentLine.length - 1)
      gameStore.incrementIndexOfCurrentWord()
    else {
      gameStore.resetIndexOfCurrentWord()
      gameStore.incrementIndexOfCurrentLine()
    }

    gameStore.setUserInput("")
  }
}
