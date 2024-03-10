import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Card from "./card"
import choiceMusicData from "../utils/choiceMusicData"
import isLanguageRegular from "../utils/isLanguageRegular"
import ChoicePageSkeleton from "./skeletons/choicePageSkeleton"
const drawSongs = (songs) => {
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

export default function Search() {
  const [songs, setSongs] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const inputRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const abortController = new AbortController()

  const handleInputChange = (event) => {
    const input = event.target.value
    setSearchInput(input)
  }

  useEffect(() => {
    // choiceMusicData(songQuery).then((songs) => setSongs(songs))
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    setIsLoading(true)
    const timeoutId = setTimeout(async () => {
      try {
        // const songs = await choiceMusicData(searchInput, abortController.signal)
        const songs = await choiceMusicData(searchInput, abortController.signal)
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
  }, [searchInput])

  return (
    <div>
      <div className="flex justify-center mt-5">
        <input
          ref={inputRef}
          className={"text-4xl p-3 mt-5 bg-slate-600"}
          placeholder="Поиск"
          spellCheck={false}
          value={searchInput}
          onChange={handleInputChange}
        />
      </div>
      {isLoading ? (
        <ChoicePageSkeleton />
      ) : (
        <>{songs.length > 0 ? drawSongs(songs) : <NotFound />}</>
      )}
    </div>
  )
}
