import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
const routes = [
  {
    name: "Главная",
    route: "/",
  },
  {
    name: "Игра",
    route: "/play",
  },
  // {
  //   name: "История",
  //   route: "/history",
  // },
  // {
  //   name: "Корзина",
  //   route: "/basket",
  // },
  // {
  //   name: "Админская",
  //   route: "/admin",
  // },
  // {
  //   name: "test",
  //   route: "/test",
  // },
]

const getRouteClass = (route) => {
  const router = useRouter()

  const linkStyles =
    "hover:scale-110 duration-150 after:w-0 after:h-[2px] after:bg-orange-600 after:block after:rounded-md hover:after:w-full after:transition-[width]"

  return clsx(
    linkStyles,
    router.pathname === route
      ? "after:h-[2px] after:block after:rounded-md after:w-full"
      : ""
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-20 w-full items-center justify-center bg-slate-800 shadow-md">
      <nav className="flex gap-10 text-xl font-semibold text-slate-50">
        {routes.map(({ name, route }) => (
          <Link className={getRouteClass(route)} href={route} key={route}>
            {name}
          </Link>
        ))}
      </nav>
    </header>
  )
}
