import Link from "next/link"
import usedLanguages from "../../utils/usedLanguages"
import Card from "../card"
import { startGame } from "../../utils/startGame"
import getPoemByUrl from "../../services/rustih/getPoemByUrl"
import getSongById from "../../services/genius/getSongById"
import { addGameToStore } from "../../utils/addGameToStore"

const DrawVariants = ({ variants }) => {
  return (
    <div className="flex flex-wrap justify-center gap-14 mt-10  w-2/3 mx-auto rounded-md p-5">
      {variants.map((variant) => {
        // variant.lines = variant.lyrics.length
        if (variant.additionalInfo) {
          variant.date = variant.additionalInfo.date
          variant.pageViews = variant.additionalInfo.pageViews
        }
        variant.onClick = () => {
          addGameToStore(variant)
        }
        return variant.lyrics.length ? (
          <Card
            onClick={() => {
              addGameToStore(variant)
            }}
            key={variant.gameId}
            obj={variant}
          />
        ) : null
      })}
    </div>
  )
}
export default DrawVariants
