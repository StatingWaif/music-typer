import { useState, useEffect } from "react"
import gameData from "../utils/gameData"
import { observer } from "mobx-react-lite"
import gameStore from "../store/gameStore"
import { useRouter } from "next/router"
import getPoem from "../utils/getPoem"
import DrawGame from "./drawGame"
import Button from "../ui/button"
import endGame from "../utils/endGame"
import EndGameWindow from "./endGameWindow"
import isLanguageRegular from "../utils/isLanguageRegular"

export default observer(function Game({ songId }) {
  //в начале рендерится два раза на загрузке и потом уже финальный(и того 3 рендера)
  useEffect(() => {
    gameData(songId).then(({ img, name, lyrics }) => {
      gameStore.setSongImg(img)
      gameStore.setSongName(name)
      gameStore.setFullText(lyrics)
      // console.log(lyrics)
      console.log(isLanguageRegular(lyrics))
      gameStore.startGame()
    })
    // getPoem()
    //   .then((data) => data.split("\n"))
    //   .then((lyrics) => gameStore.setFullText(lyrics))
  }, [])
  return <>{gameStore.isGoing ? <DrawGame /> : <EndGameWindow />}</>
})
