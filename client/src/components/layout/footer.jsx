import Image from "next/image"
import logoSrc from "./images/logo.png"
export function Footer() {
  return (
    <footer className="bg-slate-500 flex justify-center p-5 mt-auto">
      <Image src={logoSrc} alt="footer image" />
    </footer>
  )
}
