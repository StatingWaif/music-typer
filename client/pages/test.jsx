import { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import Image from "next/image"
import { useRouter } from "next/router"
import gameStore from "../components/store/gameStore"
import MainGameSkeleton from "../components/skeletons/mainGameSkeleton"
import gameData from "../components/utils/gameData"
import getPoem from "../components/utils/getPoem"
import GameInfo from "../components/game/gameInfo"
import DrawText from "../components/game/drawText"
import Input from "../components/game/input"
import choicePoemData from "../components/utils/choicePoemData"
import isLanguageRegular from "../components/utils/isLanguageRegular"

export default observer(function Test() {
  const test_string = ``

  // console.log(isLanguageRegular(test_string))
  // console.log(choicePoemData("Николай Гумилев"))
  // useEffect(() => {
  //   ;(async () => {
  //     const data = await choicePoemData("Николай Гумилев")
  //     console.log(data)
  //   })()
  // }, [])
  // //в начале рендерится два раза на загрузке и потом уже финальный(и того 3 рендера)
  // const router = useRouter()
  // const songId = router.query.id || 3126049
  // useEffect(() => {
  //   gameData(songId).then(({ img, name, lyrics }) => {
  //     // gameStore.setSongImg(img)
  //     // gameStore.setSongName(name)
  //     // gameStore.setFullText(lyrics)
  //   })
  //   getPoem()
  //     .then((data) => data.split("\n"))
  //     .then((lyrics) => gameStore.setFullText(lyrics))
  // }, [])
  // return (
  //   <>
  //     {gameStore.fullText ? (
  //       <div className="flex mt-10">
  //         <GameInfo className=" ml-8 w-1/4" />
  //         <div className="flex items-center h-full justify-center flex-col mb-5">
  //           <span className="mb-5 ">
  //             <Image
  //               src={gameStore.songImg}
  //               width={400}
  //               height={400}
  //               alt={`cover of ${gameStore.songName}`}
  //               className="rounded-md" //тут надо нормально сделть как в музик чузе для картинки
  //             />
  //           </span>
  //           <span>
  //             <DrawText />
  //             <Input />
  //           </span>
  //         </div>
  //       </div>
  //     ) : (
  //       <MainGameSkeleton />
  //       // <div className="flex justify-center mt-[20%] text-8xl">
  //       //   {<LoadingSvg />}
  //       // </div>
  //     )}
  //   </>
  // )
})
