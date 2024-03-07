import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import choiceMusicData from "./utils/choiceMusicData"
import ChoicePageSkeleton from "./skeletons/choicePageSkeleton"
import Card from "./card"
import gameData from "./utils/gameData"
import isLanguageRegular from "./utils/isLanguageRegular"

// href={{ pathname: "/play", query: { id: song.id } }}
const drawSongs = (songs) => {
  return (
    <div className="flex flex-wrap justify-center gap-14 mt-10  w-2/3 mx-auto rounded-md p-5">
      {songs.map((song, index) => (
        <a href={`/play?id=${song.id}`} key={song.id}>
          {/* //   href={`/play?id=${song.id}`}
        //   className="bg-slate-700 rounded-md p-3 ml-20 m-5 flex gap-3 h-[250px] w-2/3 overflow-hidden hover:scale-105 transition-all hover:shadow-xl hover:duration-300 hover:rounded-md hover:border hover:border-orange-600"
        //   key={song.id}
        // >
        //   <p className="text-3xl text-slate-400">{`${index + 1})`}</p>
        //   <div className="p-3 my-auto overflow-hidden relative h-[200px] min-w-[200px] rounded-md">
        //     <Image */}
          {/* //       alt={song.name}
        //       src={song.thumbnail}
        //       fill={true}
        //       objectFit="cover"
        //       priority
        //     />
        //   </div> */}
          {/* //   <p className="text-2xl p-5 text-left">{`${song.name}`}</p>
        // </a> */}
          <Card
            name={song.name}
            img={song.thumbnail}
            linesCount={song.lyrics.length}
            languages={isLanguageRegular(song.lyrics)}
          />
        </a>
      ))}
    </div>
  )
  // </div>)
}

const NotFound = () => {
  return (
    <div className="mx-auto text-center text-5xl mt-20">Ничего не найдено(</div>
  )
}

export default function ChoiceList() {
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
