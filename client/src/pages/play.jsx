import { useRouter } from "next/router"
import Game from "../components/game/game"
import { SearchGame } from "../components/searchGame"
import StartGameWindow from "../components/game/startGameWindow"

export default function Play() {
  const router = useRouter()
  const id = router.query.id
  // return <>{id ? <Game id={id} /> : <SearchGame />}</>
  return <>{id ? <StartGameWindow id={id} /> : <SearchGame />}</>
}
