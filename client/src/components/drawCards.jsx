import getSongById from "../services/genius/getSongById"
import getPoemByUrl from "../services/rustih/getPoemByUrl"
import gameStore from "../store/gameStore"
import { addGameToStore } from "../utils/addGameToStore"
import Card from "./card"

export default function DrawCards({ elements }) {
  return (
    <>
      {elements.map((element) => {
        if (!element) {
          return
        }
        if (element.additionalInfo) {
          element.date = element.additionalInfo.date
          element.pageViews = element.additionalInfo.pageViews
        }
        element.languages = {
          rus: element.hasRus,
          eng: element.hasEng,
          other: element.hasOther,
        }
        element.onClick = () => {
          addGameToStore(element)
          ;(async () => {
            let data
            if (element.isPoem) {
              data = await getPoemByUrl(element.gameId)
            } else {
              data = await getSongById(element.gameId)
            }
            addGameToStore(data)
          })()
        }
        return <Card obj={element} key={element.id} />
      })}
    </>
  )
}
