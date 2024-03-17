import DrawText from "./drawText"
import { GameInput } from "./gameInput"
import MainGameSkeleton from "../skeletons/mainGameSkeleton"
import { observer } from "mobx-react-lite"
// import gameStore from "../store/gameStore"
import GameInfo from "./gameInfo"
import Image from "next/image"
import gameStore from "../../store/gameStore"
// import endGame from "../utils/endGame"
// import Button from "../ui/button"

const SongCover = ({ width = 400, height = 400 }) => (
  <div className="mb-5 max-w-full">
    <Image
      src={gameStore.gameImg}
      width={width}
      height={height}
      alt={`cover of ${gameStore.gameName || "game"}`}
      objectFit="contain"
      className="rounded-md"
    />
  </div>
)
const CenterPart = ({ children }) => (
  <div className="col-start-2 flex items-center h-full justify-center flex-col mb-5 lg:mt-10">
    {children}
  </div>
)

export default observer(function DrawGame() {
  return (
    <>
      {gameStore.fullText ? (
        <div className="grid grid-cols-3 grid-rows-2 my-10">
          <GameInfo className="lg:mt-0 mt-5 lg:w-8/12 lg:ml-8 lg:col-start-1 lg:text-left w-screen flex text-center row-start-2 lg:row-start-auto" />
          <CenterPart>
            <SongCover />
            <DrawText />
            <GameInput />
          </CenterPart>
        </div>
      ) : (
        <MainGameSkeleton />
      )}
    </>
  )
})
