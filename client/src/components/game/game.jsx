import { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
// import gameStore from "../store/gameStore"
import DrawGame from "./drawGame"
import EndGameWindow from "./endGameWindow"
import getSongById from "../../services/genius/getSongById"
import gameStore from "../../store/gameStore"
import getPoemByUrl from "../../services/rustih/getPoemByUrl"

export default observer(function Game({ id }) {
  //в начале рендерится два раза на загрузке и потом уже финальный(и того 3 рендера)
  useEffect(() => {
    if (/\d+/.test(id)) {
      getSongById(id).then(({ img, name, lyrics }) => {
        gameStore.setSongImg(img)
        gameStore.setSongName(name)
        gameStore.setFullText(lyrics)
        // console.log(lyrics)
        gameStore.startGame()
      })
    } else {
      getPoemByUrl(`https://rustih.ru/${id}`).then((poem) => {
        gameStore.setSongImg(poem.img)
        gameStore.setSongName(poem.name)
        gameStore.setFullText(poem.lyrics)
        gameStore.startGame()
      })
    }
  }, [])
  return <>{gameStore.isGoing ? <DrawGame /> : <EndGameWindow />}</>
})
