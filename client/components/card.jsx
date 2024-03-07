import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import Button from "./ui/button"
import isLanguageRegular from "./utils/isLanguageRegular"

export default function Card({
  link = "#",
  name,
  speed = 400,
  mistakes = 55,
  desc,
  img,
  linesCount,
  languages,
}) {
  return (
    <CardContainer>
      <CardImage img={img} name={name} />
      <PopUp
        name={name}
        speed={speed}
        desc={desc}
        mistakes={mistakes}
        linesCount={linesCount}
        languages={languages}
      />
    </CardContainer>
  )
}

function CardContainer({ children }) {
  return (
    <div
      className={`group relative h-[300px] w-[300px] overflow-hidden rounded-2xl duration-300 hover:shadow-xl `}
    >
      {children}
    </div>
  )
}

function BriefDescription({ name, speed, mistakes, linesCount, languages }) {
  return (
    <div className="py-1 flex text-sm gap-1">
      <p className="text-start w-10/12 line-clamp-3">{name}</p>
      <div className="bg-white opacity-50 min-w-[1px] rounded-2xl mx-1" />
      <div className="text-end px-1 gap-1 flex-col flex">
        <p className="max-w-32 line-clamp-2">Кол-во строк: {linesCount}</p>
        {/* <p className="truncate max-w-32">Ошибки: {mistakes}</p> */}
        <p className="truncate max-w-32 text-orange-600">
          {languages.join(", ")}
        </p>
      </div>
    </div>
  )
}

function LongDescription({ desc }) {
  return (
    <div
      className="text-sm 
    opacity-0 transition-all duration-500 group-hover:visible group-hover:opacity-100 
    w-full h-full "
    >
      <div>
        {/* <p className="">Количество строк: {500}</p> */}
        {/* <p className="">Используемые языки: rus, eng</p> */}
        {/* <p className="">Ваше лучшее время: 01:54</p> */}
      </div>
    </div>
  )
}

function PopUpContainer({ children }) {
  return (
    <div
      className={`flex h-[100px] flex-col rounded-b-2xl  duration-[400ms] group-hover:visible group-hover:h-[170px] group-hover:bg-black
    w-[300px] absolute bottom-0 box-border overflow-hidden bg-slate-900 bg-opacity-80 p-2 transition-all group-hover:opacity-90 backdrop-blur-sm`}
    >
      {children}
    </div>
  )
}

function PopUp({ name, speed, desc, mistakes, linesCount, languages }) {
  return (
    <PopUpContainer>
      <BriefDescription
        name={name}
        speed={speed}
        mistakes={mistakes}
        linesCount={linesCount}
        languages={languages}
      />
      <LongDescription desc={desc} />
    </PopUpContainer>
  )
}

function CardImage({ img, name }) {
  return (
    <Image
      alt={`cover of ${name}`}
      src={img}
      fill={true}
      unoptimized={true}
      className="object-cover transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110"
    />
  )
}

function ProductLink({ children, link }) {
  // return <Link href={link || "/product"}>{children}</Link>
  return <>{children}</>
}
