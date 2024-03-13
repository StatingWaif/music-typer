import clsx from "clsx"

export default function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        "flex h-10 w-fit justify-center items-center rounded-md bg-slate-600 p-5 py-6 text-xl transition-colors duration-100 hover:bg-orange-600"
      )}
    >
      {children}
    </button>
  )
}
