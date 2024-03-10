import { clsx } from "clsx"
// import gameStore from "../store/gameStore"
import { useRef, useEffect } from "react"
import { observer } from "mobx-react-lite"
import gameStore from "../../store/gameStore"

export default observer(function Input({}) {
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  const handleInputChange = (event) => {
    const typedWord = event.target.value

    gameStore.setUserInput(typedWord)

    if (
      gameStore.currentWord.startsWith(typedWord) ||
      typedWord === gameStore.currentWord + " "
    ) {
      if (
        !gameStore.isWrong &&
        gameStore.userInput.length > gameStore.prevUserInput.length
      ) {
        gameStore.incrementSymCount()
      }
      gameStore.setIsWrong(false)
    } else {
      if (!gameStore.isWrong) {
        gameStore.incrementMistakes()
      }
      gameStore.setIsWrong(true)
    }
    if (typedWord === gameStore.currentWord + " ") {
      if (gameStore.indexOfCurrentWord !== gameStore.currentLine.length - 1)
        gameStore.incrementIndexOfCurrentWord()
      else {
        gameStore.resetIndexOfCurrentWord()
        gameStore.incrementIndexOfCurrentLine()
      }
      gameStore.setUserInput("")
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        className={clsx(
          "text-4xl p-3 mt-5",
          gameStore.isWrong ? "bg-red-800" : "bg-slate-600"
        )}
        type="input"
        placeholder="Набирайте текст!"
        size={30}
        spellCheck={false}
        value={gameStore.userInput}
        onChange={handleInputChange}
      />
    </>
  )
})
