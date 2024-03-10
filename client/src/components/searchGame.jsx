import { useEffect, useState } from "react"
import Card from "./card"
import choiceMusicData from "../utils/choiceMusicData"
import isLanguageRegular from "../utils/isLanguageRegular"
import ChoicePageSkeleton from "./skeletons/choicePageSkeleton"
import useInput from "../hooks/useInput"
import ToggleSwitch from "./ui/toggleSwitch"
import useToggleSwitch from "../hooks/useToggleSwitch"
const drawVariants = (songs) => {
  return (
    <div className="flex flex-wrap justify-center gap-14 mt-10  w-2/3 mx-auto rounded-md p-5">
      {songs.map((song, index) => (
        <a href={`/play?id=${song.id}`} key={song.id}>
          <Card
            name={song.name}
            img={song.thumbnail}
            linesCount={song.lyrics.length}
            languages={isLanguageRegular(song.lyrics)}
            date={song.date}
            pageViews={song.pageViews}
          />
        </a>
      ))}
    </div>
  )
}

const NotFound = () => {
  return (
    <div className="mx-auto text-center text-5xl mt-20">Ничего не найдено(</div>
  )
}

export default function SearchGame() {
  const [songs, setSongs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const abortController = new AbortController()
  const search = useInput("")
  const toggle = useToggleSwitch(false)

  useEffect(() => {
    setIsLoading(true)
    const timeoutId = setTimeout(async () => {
      try {
        const songs = await choiceMusicData(
          search.value,
          abortController.signal
        )
        setSongs(songs)
      } catch (e) {
      } finally {
        setIsLoading(false)
      }
    }, 500)
    return () => {
      clearTimeout(timeoutId)

      abortController.abort()
    }
  }, [search.value])

  return (
    <div className="flex flex-col">
      <div className="flex justify-center mt-10 gap-5">
        <input {...search} />
      </div>
      <div className="pt-5 self-center flex gap-2 text-2xl">
        <p>Песни</p>
        <ToggleSwitch {...toggle} />
        <p>Стихи</p>
      </div>
      {isLoading ? (
        <ChoicePageSkeleton />
      ) : (
        <>{songs.length > 0 ? drawVariants(songs) : <NotFound />}</>
      )}
    </div>
  )
}
