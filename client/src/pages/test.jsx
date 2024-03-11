import { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import useInput from "../hooks/useInput"
import SearchGame from "../components/searchGame/searchGame"

export default observer(function Test() {
  const [poems, setPoems] = useState([])
  const search = useInput("")
  // console.log(usedLanguages(test_string))
  useEffect(() => {
    ;(async () => {
      // const data = await choicePoemData("Николай Гумилев")
      // setPoems(await getPoems("Николай гумилев память"))
    })()
  }, [])
  return <SearchGame />
  // return (
  //   <div className="flex flex-wrap justify-center gap-14 mt-10  w-2/3 mx-auto rounded-md p-5">
  //     {poems.map((poem, index) => (
  //       <a href={`/play?poem=${poem.name}`} key={poem.name}>
  //         {poem.lyrics.length ? (
  //           <Card
  //             name={poem.name}
  //             img={poem.img}
  //             linesCount={poem.lyrics.length}
  //             languages={["rus"]}
  //           />
  //         ) : null}
  //       </a>
  //     ))}
  //   </div>
  // )

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
