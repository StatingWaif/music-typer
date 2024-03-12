import gameStore from "../../../store/gameStore"

export const countSyms = () => {
  if (
    !gameStore.isWrong &&
    gameStore.userInput.length > gameStore.prevUserInput.length
  ) {
    gameStore.incrementSymCount()
  }
}
