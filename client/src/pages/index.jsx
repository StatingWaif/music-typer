import Image from "next/image"
import Button from "../components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="h-screen flex justify-center items-center text-center flex-col">
      <h1 className="text-5xl">Это клавиатурный тренажер</h1>
      <h2 className="text-4xl">Он имеет два режима: песни и стихи</h2>
      <Link href={"/play"}>
        <Button className="mt-5 w-52 h-24 animate-pulse">
          <span className="text-3xl">Старт</span>
        </Button>
      </Link>
    </div>
  )
}
