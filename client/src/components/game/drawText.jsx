import clsx from "clsx"
import { observer } from "mobx-react-lite"
import gameStore from "../../store/gameStore"
// import gameStore from "../store/gameStore"

export default observer(function DrawText() {
  const numOfStrings = 4
  const text = gameStore.fullText
  let startIndex =
    gameStore.indexOfCurrentLine === 0 ? 0 : gameStore.indexOfCurrentLine - 1
  let endIndex = startIndex + numOfStrings

  const drawWord = (line, lineIndex) => {
    {
      return line.split(" ").map((word, wordIndex) => (
        <span
          key={`${lineIndex}_${wordIndex}`}
          className={clsx(
            "text-xl",
            wordIndex === gameStore.indexOfCurrentWord &&
              lineIndex === gameStore.indexOfCurrentLine
              ? "text-green-600"
              : ""
          )}
        >
          {word + " "}
        </span>
      ))
    }
  }

  return (
    <div className="-z-10 border rounded-md p-5 min-w-[600px] text-center">
      {text.map((line, lineIndex) => (
        <div
          key={lineIndex}
          className={clsx(
            "select-none transition-transform",
            gameStore.indexOfCurrentLine === lineIndex ? "" : "text-slate-700",
            lineIndex >= startIndex && lineIndex < endIndex
              ? ""
              : "invisible absolute"
          )}
        >
          {drawWord(line, lineIndex)}
        </div>
      ))}
    </div>
  )
})
