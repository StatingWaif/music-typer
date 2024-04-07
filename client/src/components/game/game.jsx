import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import DrawGame from "./drawGame"
import EndGameWindow from "./endGameWindow"
import getSongById from "../../services/genius/getSongById"
import gameStore from "../../store/gameStore"
import getPoemByUrl from "../../services/rustih/getPoemByUrl"
import { startGame } from "../../utils/startGame"

export default observer(function Game({ id }) {
  useEffect(() => {
    if (/\d+/.test(id)) {
      startGame(getSongById, id)
    } else {
      startGame(getPoemByUrl, id)
    }
  }, [])
  return <>{!gameStore.isEnded ? <DrawGame /> : <EndGameWindow />}</>
})
