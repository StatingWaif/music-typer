import Image from "next/image"
import Link from "next/link"
import usedLanguages from "../utils/usedLanguages"
import formatDate from "../utils/formatDate"

export default function Card({ obj }) {
  const link = `/play?id=${obj.gameId}`
  const onClick = obj.onClick
  const name = obj.name
  const speed = obj.speed ?? 400
  const mistakes = obj.mistakes ?? 55
  const desc = obj.desc
  const img = obj.img
  const linesCount = obj.lines
  const languages = obj.languages ?? ["other"]
  const date = obj.date
  const pageViews = obj.pageViews
  return (
    <Link onClick={onClick} href={link}>
      <CardContainer>
        <CardImage img={img} name={name} />
        <PopUp
          name={name}
          speed={speed}
          desc={desc}
          mistakes={mistakes}
          linesCount={linesCount}
          languages={languages}
          date={date}
          pageViews={pageViews}
        />
      </CardContainer>
    </Link>
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

function LongDescription({ desc, date, pageViews }) {
  return (
    <div
      className="text-sm 
    opacity-0 transition-all duration-500 group-hover:visible group-hover:opacity-100 
    w-full h-full "
    >
      <div>
        {date && <p>Дата: {formatDate(date)}</p>}
        {pageViews && <p>Просмотры: {pageViews}</p>}
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

function PopUp({
  name,
  speed,
  desc,
  mistakes,
  linesCount,
  languages,
  date,
  pageViews,
}) {
  return (
    <PopUpContainer>
      <BriefDescription
        name={name}
        speed={speed}
        mistakes={mistakes}
        linesCount={linesCount}
        languages={languages}
      />
      <LongDescription desc={desc} date={date} pageViews={pageViews} />
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
