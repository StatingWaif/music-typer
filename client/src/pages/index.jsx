import Image from "next/image"
import Button from "../components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="h-screen flex justify-center items-center text-center flex-col">
      <div className="text-5xl animate-pulse flex flex-col gap-4 items-center justify-center">
        <Image
          className="rounded-2xl mb-5"
          src={
            "https://sun9-4.userapi.com/impg/FuHeOjVAbOmRpVelJRTSFG7ZnCnAtOZWU0x4cA/ynIewpw4440.jpg?size=720x720&quality=95&sign=b6130101bee9575eef98d66f4810e97c&type=album"
          }
          width={500}
          height={500}
        />
        <p>Стартовая страница, которая никуда не ведет...</p>
        <p>Пульсирует словно это какая-то загрузка</p>
        <p>Но её нет..</p>
      </div>
      <Link href={"/play"}>
        <Button className="mt-5">Выбрать песню</Button>
      </Link>
    </div>
  )
}
