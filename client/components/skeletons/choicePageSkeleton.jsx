import LineSkeleton from "./lineSkeleton"
import Skeleton from "./skeleton"

export default function ChoicePageSkeleton() {
  return (
    <div className="flex flex-wrap justify-center gap-14 mt-10  w-2/3 mx-auto rounded-2xl p-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <LineSkeleton key={index} width="w-[300px]" height="h-[300px]" />
      ))}
    </div>
  )
}
