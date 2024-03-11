import usedLanguages from "../../utils/usedLanguages"
import Card from "../card"

const DrawVariants = ({ variants }) => {
  return (
    <div className="flex flex-wrap justify-center gap-14 mt-10  w-2/3 mx-auto rounded-md p-5">
      {variants.map((variant) =>
        variant.lyrics.length ? (
          <a
            href={`/play?id=${variant.id || variant.link}`}
            key={variant.id || variant.name}
          >
            <Card
              name={variant.name}
              img={variant.img}
              linesCount={variant.lyrics.length}
              languages={usedLanguages(variant.lyrics)}
              date={variant.date}
              pageViews={variant.pageViews}
            />
          </a>
        ) : null
      )}
    </div>
  )
}
export default DrawVariants
