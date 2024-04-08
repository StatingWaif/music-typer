import { useEffect, useState } from "react"
import Card from "../components/card"
import { getAll } from "../http/statisticsApi"
import DrawCards from "../components/drawCards"
import HistorySkeleton from "../components/skeletons/historySkeleton"
import userStore from "../store/userStore"

export default function History() {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAll()
      .then((data) => setHistory(JSON.parse(data.request.response)))
      .catch(console.log)
      .finally(() => setTimeout(() => setLoading(false), 500))
  }, [])

  return (
    <>
      <div className="mx-auto mt-5">
        <h1 className="text-center text-5xl">
          {userStore.isAuth ? "Прошлые игры" : "Нет аккаунта - нет истории("}
        </h1>
      </div>
      <main className="flex gap-20 flex-wrap mt-10 p-5 justify-center">
        {history.length ? (
          <DrawCards
            elements={history.map((el) => {
              const text = el?.text
              el.isPoem = text?.isPoem
              el.date = text?.date
              el.pageViews = text?.pageViews
              el.gameId = text?.gameId
              el.timesPlayed = text?.timesPlayed
              el.img = text?.img
              el.lines = text?.lines
              el.hasRus = text?.hasRus
              el.hasEng = text?.hasEng
              el.hasOther = text?.hasOther
              return el
            })}
          />
        ) : loading ? (
          <HistorySkeleton />
        ) : null}
      </main>
    </>
  )
}
