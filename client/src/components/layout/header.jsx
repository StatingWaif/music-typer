import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import userStore from "../../store/userStore"
import { observer } from "mobx-react-lite"
const routes = [
  {
    name: "Главная",
    route: "/",
  },
  {
    name: "Игра",
    route: "/play",
  },
  {
    name: "История",
    route: "/history",
  },
  {
    name: () => (userStore.isAuth ? "Выйти" : "Авторизация"),
    route: () => (userStore.isAuth ? "/logout" : "/auth"),
  },
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
const Header = observer(() => {
  return (
    <header className="sticky top-0 z-50 flex h-20 w-full items-center justify-center bg-slate-800 shadow-md">
      <nav className="flex sm:gap-10 gap-2 sm:text-xl font-semibold text-slate-50">
        {routes.map(({ name, route }) => {
          const routeName = typeof name === "function" ? name() : name
          const href = typeof route === "function" ? route() : route
          return (
            <Link className={getRouteClass(route)} href={href} key={route}>
              {routeName}
            </Link>
          )
        })}
      </nav>
    </header>
  )
})
export { Header }
