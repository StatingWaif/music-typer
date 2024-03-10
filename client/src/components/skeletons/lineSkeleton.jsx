import React from "react"
import Skeleton from "./skeleton"
import clsx from "clsx"

export default function LineSkeleton({
  classname,
  width,
  height,
  color,
  count = 1,
}) {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          classname={clsx(
            "rounded-md",
            classname,
            width || "w-[800px]",
            height || "h-8",
            color || "bg-slate-500"
          )}
        />
      ))}
    </div>
  )
}
