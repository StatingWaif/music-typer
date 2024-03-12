import gameStore from "../../../store/gameStore"

export const isInputCorrect = (typedWord) =>
  gameStore.currentWord.startsWith(typedWord) ||
  typedWord === gameStore.currentWord + " "
