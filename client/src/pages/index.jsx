import Image from "next/image"
import Button from "../components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"
import getFromLocalStorage from "../utils/localStorage/getFromLocalStorage"
import Card from "../components/card"
import getSongById from "../services/genius/getSongById"
import { addGameToStore } from "../utils/addGameToStore"
import gameStore from "../store/gameStore"
import getPoemByUrl from "../services/rustih/getPoemByUrl"
import { getPopular } from "../http/textApi"

export default function HomePage() {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    getPopular()
      .then((data) => setPopular(JSON.parse(data.request.response)))
      .catch(console.log)
  }, [])
  return (
    <>
      <div className="p-16 h-[50vh] flex justify-center items-center text-center flex-col">
        <h1 className="text-5xl">Это клавиатурный тренажер</h1>
        <h2 className="text-4xl">Он имеет два режима: песни и стихи</h2>
        <Link href={"/play"}>
          <Button className="mt-5 w-52 h-24 animate-pulse">
            <span className="text-3xl">Старт</span>
          </Button>
        </Link>
      </div>
      <h3 className="text-5xl text-center mt-5">Хайповые</h3>
      <div className="flex flex-wrap justify-center gap-14 mt-10  mx-auto rounded-md p-5">
        {popular.length
          ? popular.map((element) => (
              <Card
                link={`/play?id=${element.gameId}`}
                key={element.id}
                img={element.img}
                name={element.name}
                linesCount={element.lines}
                languages={element.languages ?? []}
                onClick={() => {
                  gameStore.setGameImg(element.img)
                  gameStore.setGameName(element.name)
                  ;(async () => {
                    let data
                    try {
                      data = await getSongById(element.gameId) // это очевидно нормально надо сделать
                    } catch {
                      data = await getPoemByUrl(element.gameId)
                    }
                    addGameToStore(data)
                  })()
                }}
              />
            ))
          : null}
      </div>
    </>
  )
}
