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
      {variants.map((variant) =>
        variant.lyrics.length ? (
          <Card
            onClick={() => {
              addGameToStore(variant)
            }}
            key={variant.id || variant.link}
            link={`/play?id=${variant.id || variant.link}`}
            name={variant.name}
            img={variant.thumbnail || variant.img}
            linesCount={variant.lyrics.length}
            languages={usedLanguages(variant.lyrics)}
            date={variant.date}
            pageViews={variant.pageViews}
          />
        ) : null
      )}
    </div>
  )
}
export default DrawVariants
