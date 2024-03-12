import Link from "next/link"
import usedLanguages from "../../utils/usedLanguages"
import Card from "../card"
import gameStore from "../../store/gameStore"
import { startGame } from "../../utils/startGame"
import getPoemByUrl from "../../services/rustih/getPoemByUrl"
import getSongById from "../../services/genius/getSongById"

const DrawVariants = ({ variants, toggle }) => {
  return (
    <div className="flex flex-wrap justify-center gap-14 mt-10  w-2/3 mx-auto rounded-md p-5">
      {variants.map((variant) =>
        variant.lyrics.length ? (
          <Link
            onClick={() => {
              if (toggle) {
                //стихи
                startGame(getPoemByUrl, variant.link)
              } else {
                //песни
                console.log(variant)
                startGame(getSongById, variant.id)
              }
            }}
            href={`/play?id=${variant.id || variant.link}`}
            key={variant.id || variant.name}
          >
            <Card
              name={variant.name}
              img={variant?.thumbnail || variant.img}
              linesCount={variant.lyrics.length}
              languages={usedLanguages(variant.lyrics)}
              date={variant.date}
              pageViews={variant.pageViews}
            />
          </Link>
        ) : null
      )}
    </div>
  )
}
export default DrawVariants
