import Link from "next/link"
import usedLanguages from "../../utils/usedLanguages"
import Card from "../card"
import { startGame } from "../../utils/startGame"
import getPoemByUrl from "../../services/rustih/getPoemByUrl"
import getSongById from "../../services/genius/getSongById"
import { addGameToStore } from "../../utils/addGameToStore"

const DrawVariants = ({ variants, toggle }) => {
  return (
    <div className="flex flex-wrap justify-center gap-14 mt-10  w-2/3 mx-auto rounded-md p-5">
      {variants.map((variant) => {
        console.log(variant)
        variant.onClick = () => {
          addGameToStore(variant)
          //image и thumbnail
        }
        return variant.lyrics.length ? (
          <Card
            onClick={() => {
              addGameToStore(variant)
            }}
            key={variant.id || variant.link}
            obj={variant}
          />
        ) : null
      })}
    </div>
  )
}
export default DrawVariants
