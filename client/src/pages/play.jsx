import { useRouter } from "next/router"
import Game from "../components/game/game"
import Search from "../components/search"

export default function Play() {
  const router = useRouter()
  const songId = router.query.id
  const poem = router.query.poem
  return (
    <>{songId || poem ? <Game songId={songId} poem={poem} /> : <Search />}</>
  )
}
