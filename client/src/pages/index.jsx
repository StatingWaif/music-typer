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
import DrawCards from "../components/drawCards"
import IndexPopularSkeleton from "../components/skeletons/indexPopularSkeleton"

export default function HomePage() {
  const [popular, setPopular] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPopular()
      .then((data) => {
        setPopular(JSON.parse(data.request.response))
        setLoading(false)
      })
      .catch(() => console.log("Нет хайпового"))
      .finally(() => {
        if (popular.length) setTimeout(() => setLoading(false), 500)
      })
  }, [])

  return (
    <>
      <div className="p-16 h-[50vh] flex justify-center items-center text-center flex-col">
        <h1 className="text-5xl">Это клавиатурный тренажер</h1>
        <h2 className="text-4xl mt-3">Он имеет два режима: песни и стихи</h2>
        <Link href={"/play"}>
          <Button className="mt-5 w-52 h-24 animate-pulse">
            <span className="text-3xl">Старт</span>
          </Button>
        </Link>
      </div>
      {loading || popular.length ? (
        <h3 className="text-5xl text-center mt-10">Хайповые</h3>
      ) : null}
      <div className="flex flex-wrap justify-center gap-14 mt-10  mx-auto rounded-md p-5 mb-5">
        {popular.length ? (
          <DrawCards elements={popular} />
        ) : loading ? (
          <IndexPopularSkeleton />
        ) : null}
      </div>
    </>
  )
}
