import clsx from "clsx"
import "../styles/global.css"
import { Montserrat } from "next/font/google"
import { Header, Footer } from "../components/layout"
import { StrictMode } from "react"

const font = Montserrat({ subsets: ["latin", "cyrillic"] })

export default function App({ Component, pageProps }) {
  return (
    // <StrictMode>
    <div
      className={clsx(
        font.className,
        "flex flex-col min-h-[100vh] text-slate-50"
      )}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
    // </StrictMode>
  )
}
