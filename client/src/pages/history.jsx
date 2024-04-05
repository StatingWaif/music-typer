import { useEffect, useState } from "react"
import Card from "../components/card"
import getSongById from "../services/genius/getSongById"
import getFromLocalStorage from "../utils/localStorage/getFromLocalStorage"
import axios from "axios"
import { getAll } from "../http/statisticsApi"

export default function History() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    // axios
    //   .get("http://localhost:7000/api/statistics/getAll", {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   })
    getAll()
      // .then((data) => setHistory(data))
      .then((data) => setHistory(JSON.parse(data.request.response)))
      .catch(console.log)
  }, [])
  // const history = getFromLocalStorage("history").reverse()
  // const history =

  return (
    <>
      <div className="mx-auto mt-5">
        <h1 className="text-center text-5xl">Прошлые игры</h1>
      </div>
      <main className="flex gap-20 flex-wrap mt-10 p-5 justify-center">
        {history.length
          ? history.map((element, index) =>
              element.text ? (
                <Card
                  key={index}
                  img={element.text.img}
                  name={element.text.name}
                />
              ) : null
            )
          : null}
      </main>
    </>
  )
}
