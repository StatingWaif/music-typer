import LineSkeleton from "./lineSkeleton"

export default function HistorySkeleton() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <LineSkeleton key={index} width="w-[300px]" height="h-[300px]" />
      ))}
    </>
  )
}
