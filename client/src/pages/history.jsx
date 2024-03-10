import { useEffect, useState } from "react"
import Card from "../components/card"
import gameData from "../components/utils/gameData"

export default function History() {
  const [data, setData] = useState([])

  useEffect(() => {
    const ids = [
      "3807675",
      "7464144",
      "7977264",
      "3066820",
      "4345880",
      "2920329",
    ]
    ids.forEach((id) => {
      gameData(id)
        .then((music) =>
          // data.push({ id: id, img: music.name, name: music.name })
          setData((prev) => [
            ...prev,
            { id: id, img: music.img, name: music.name },
          ])
        )
        .then(() => console.log(data))
    })
  }, [])

  return (
    <>
      <div className="mx-auto mt-5">
        <p className="text-center text-5xl">Прошлые игры</p>
      </div>
      <div className="flex gap-20 flex-wrap mt-10 p-5 justify-center">
        {data.map((element) => (
          <Card key={element.id} img={element.img} name={element.name} />
        ))}
      </div>
    </>
  )
}
