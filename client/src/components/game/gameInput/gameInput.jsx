import { clsx } from "clsx"
import { useRef, useEffect } from "react"
import { observer } from "mobx-react-lite"
import gameStore from "../../../store/gameStore"
import endGame from "../../../utils/endGame"
import { isInputCorrect } from "./isInputCorrect"
import { countSyms } from "./countSyms"
import { managingTextLine } from "./managingTextLine"

export default observer(function GameInput({}) {
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  const handleInputChange = (event) => {
    const typedWord = event.target.value

    gameStore.setUserInput(typedWord)

    if (isInputCorrect(typedWord)) {
      countSyms()
      gameStore.setIsWrong(false)
    } else {
      if (!gameStore.isWrong) {
        gameStore.incrementMistakes()
      }
      gameStore.setIsWrong(true)
    }
    managingTextLine(typedWord)
  }

  return (
    <>
      <div className="px-2">
        <input
          ref={inputRef}
          className={clsx(
            "text-4xl p-3 mt-5 w-screen max-w-[600px] ",
            gameStore.isWrong ? "bg-red-800" : "bg-slate-600"
          )}
          type="input"
          placeholder="Набирайте текст!"
          spellCheck={false}
          value={gameStore.userInput}
          onChange={handleInputChange}
        />
      </div>
    </>
  )
})
