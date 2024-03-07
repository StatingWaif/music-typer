import { useState } from "react"
import { Game } from "../components/game"
import ChoiceList from "../components/ChoiceList"
import { useRouter } from "next/router"

export default function Play() {
  const router = useRouter()
  const songId = router.query.id
  return <>{songId ? <Game songId={songId} /> : <ChoiceList />}</>
}
