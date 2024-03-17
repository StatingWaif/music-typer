import Image from "next/image"
import logoSrc from "./images/logo.png"
export function Footer() {
  return (
    <footer className="bg-slate-500 flex justify-center p-5 mt-auto h-auto relative">
      <div className="relative w-full h-full flex items-center justify-center">
        <Image src={logoSrc} alt="footer image" />
      </div>
    </footer>
  )
}
