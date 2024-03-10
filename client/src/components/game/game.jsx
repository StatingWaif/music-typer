import { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
// import gameStore from "../store/gameStore"
import DrawGame from "./drawGame"
import EndGameWindow from "./endGameWindow"
import gameData from "../../utils/gameData"
import gameStore from "../../store/gameStore"

export default observer(function Game({ songId, poem }) {
  //в начале рендерится два раза на загрузке и потом уже финальный(и того 3 рендера)
  useEffect(() => {
    if (songId) {
      gameData(songId).then(({ img, name, lyrics }) => {
        gameStore.setSongImg(img)
        gameStore.setSongName(name)
        gameStore.setFullText(lyrics)
        // console.log(lyrics)
        gameStore.startGame()
      })
    } else if (poem) {
    }
    // getPoem()
    //   .then((data) => data.split("\n"))
    //   .then((lyrics) => gameStore.setFullText(lyrics))
  }, [])
  return <>{gameStore.isGoing ? <DrawGame /> : <EndGameWindow />}</>
})
