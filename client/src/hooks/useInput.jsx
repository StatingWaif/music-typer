import { useEffect, useRef, useState } from "react"

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const ref = useRef(null)
  const onChange = (event) => setValue(event.target.value)

  useEffect(() => {
    ref.current?.focus()
  }, [])

  const className = "text-4xl p-3 bg-slate-600 max-w-full"
  const spellCheck = false
  return {
    ref,
    className,
    spellCheck,
    value,
    onChange,
  }
}
