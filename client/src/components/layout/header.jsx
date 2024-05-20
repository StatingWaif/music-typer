import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import userStore from "../../store/userStore"
import { observer } from "mobx-react-lite"
import { BsBoxArrowInLeft } from "react-icons/bs"
import { BsBoxArrowInRight } from "react-icons/bs"
import { BsFillPlayFill, BsHouse, BsPerson } from "react-icons/bs"
const routes = [
  {
    name: "Главная",
    route: "/",
    icon: <BsHouse />,
  },
  {
    name: "Игра",
    route: "/play",
    icon: <BsFillPlayFill />,
  },
  {
    name: "История",
    route: "/history",
    icon: <BsPerson />,
  },
  {
    name: () => (userStore.isAuth ? "Выйти" : "Авторизация"),
    route: () => (userStore.isAuth ? "/logout" : "/auth"),
    icon: () =>
      userStore.isAuth ? <BsBoxArrowInRight /> : <BsBoxArrowInLeft />,
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
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-center bg-slate-800 shadow-md">
      <nav className="flex gap-10 text-xl font-semibold text-slate-50">
        {routes.map(({ name, route, icon }) => {
          const routeName = typeof name === "function" ? name() : name
          const href = typeof route === "function" ? route() : route
          const ico = typeof icon === "function" ? icon() : icon
          return (
            <Link className={getRouteClass(route)} href={href} key={route}>
              <div className="flex">
                <span className="sm:hidden text-3xl">{ico}</span>
                <span className="hidden sm:block">{routeName}</span>
              </div>
            </Link>
          )
        })}
      </nav>
    </header>
  )
})
export { Header }
