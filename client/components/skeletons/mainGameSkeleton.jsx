import React from "react"
import Skeleton from "./skeleton"
import LineSkeleton from "./lineSkeleton"
import GameInfo from "../game/gameInfo"
import DrawText from "../game/drawText"
import Input from "../game/input"
import gameStore from "../store/gameStore"
import Image from "next/image"
export default function MainGameSkeleton() {
  return (
    <div className="flex mt-10">
      <LineSkeleton
        className="ml-8"
        width={"w-[360px]"}
        height={"h-[30px]"}
        count={6}
      />
      <div className="flex items-center h-full justify-center flex-col mb-5">
        <span className="mb-5 ">
          <LineSkeleton width={"w-[400px]"} height={"h-[400px]"} />
        </span>
        <span className="flex items-center flex-col">
          <LineSkeleton
            className="ml-8"
            width={"w-[360px]"}
            height={"h-[30px]"}
            count={4}
          />
          {/* <Input /> */}
          <LineSkeleton
            className="ml-8"
            width={"w-[700px]"}
            height={"h-[60px]"}
          />
        </span>
      </div>
    </div>
  )
}
