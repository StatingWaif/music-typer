import DrawText from "./drawText"
import Input from "./input"
import MainGameSkeleton from "../skeletons/mainGameSkeleton"
import { observer } from "mobx-react-lite"
// import gameStore from "../store/gameStore"
import GameInfo from "./gameInfo"
import Image from "next/image"
import gameStore from "../../store/gameStore"
// import endGame from "../utils/endGame"
// import Button from "../ui/button"

const SongCover = ({ width = 400, height = 400 }) => (
  <span className="mb-5">
    <Image
      src={gameStore.songImg}
      width={width}
      height={height}
      alt={`cover of ${gameStore.songName || "song"}`}
      className="rounded-md"
    />
  </span>
)
const CenterPart = ({ children }) => (
  <div className="flex items-center h-full justify-center flex-col mb-5">
    {children}
  </div>
)

export default observer(function DrawGame() {
  return (
    <>
      {gameStore.fullText ? (
        <div className="flex mt-10">
          <GameInfo className=" ml-8 w-1/4" />
          <CenterPart>
            <SongCover />
            <DrawText />
            <Input />
          </CenterPart>
        </div>
      ) : (
        <MainGameSkeleton />
      )}
    </>
  )
})
