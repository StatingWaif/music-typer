import { useEffect, useState } from "react"
import getSongs from "../../services/genius/getSongs"
import ChoicePageSkeleton from "../skeletons/choicePageSkeleton"
import useInput from "../../hooks/useInput"
import ToggleSwitch from "../ui/toggleSwitch"
import useToggleSwitch from "../../hooks/useToggleSwitch"
import getPoems from "../../services/rustih/getPoems"
import DrawVariants from "./drawVariants"
import NotFoundWindow from "./notFoundWindow"

export default function SearchGame() {
  const [variants, setVariants] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const abortController = new AbortController()
  const search = useInput("")
  const toggle = useToggleSwitch(false)

  useEffect(() => {
    setIsLoading(true)
    const timeoutId = setTimeout(async () => {
      try {
        if (toggle.isChecked) {
          //стихи
          if (search.value) {
            const poems = await getPoems(search.value, abortController.signal)
            setVariants(poems)
          }
        } else {
          //песни
          if (search.value) {
            const songs = await getSongs(search.value, abortController.signal)
            setVariants(songs)
          }
        }
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }
    }, 500)
    return () => {
      clearTimeout(timeoutId)

      abortController.abort()
    }
  }, [search.value, toggle.isChecked])
  return (
    <div className="flex flex-col">
      <div className="flex justify-center mt-10 gap-5">
        <input {...search} placeholder="Поиск" />
      </div>
      <div className="pt-5 self-center flex gap-2 text-2xl">
        <p>Песни</p>
        <ToggleSwitch {...toggle} />
        <p>Стихи</p>
      </div>
      {isLoading ? (
        <ChoicePageSkeleton />
      ) : (
        <>
          {variants.length ? (
            <DrawVariants variants={variants} toggle={toggle.isChecked} />
          ) : (
            <NotFoundWindow />
          )}
        </>
      )}
    </div>
  )
}
