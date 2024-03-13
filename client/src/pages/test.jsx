import { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import useInput from "../hooks/useInput"
import SearchGame from "../components/searchGame/searchGame"
import StartGameWindow from "../components/game/startGameWindow"

export default observer(function Test() {
  const [poems, setPoems] = useState([])
  const search = useInput("")
  // console.log(usedLanguages(test_string))
  useEffect(() => {
    ;(async () => {
      // const data = await choicePoemData("Николай Гумилев")
      // setPoems(await getPoems("Николай гумилев память"))
    })()
  }, [])
  return <StartGameWindow />
})
