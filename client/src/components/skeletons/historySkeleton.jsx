import LineSkeleton from "./lineSkeleton"

export default function HistorySkeleton() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <LineSkeleton key={index} width="w-[300px]" height="h-[300px]" />
      ))}
    </>
  )
}
