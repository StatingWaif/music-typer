import clsx from "clsx"
import React from "react"

export default function Skeleton({ classname, children }) {
  return (
    <div className={clsx(classname, "animate-pulse rounded-md")}>
      {children}
    </div>
  )
}
