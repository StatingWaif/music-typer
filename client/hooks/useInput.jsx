import { useEffect, useRef, useState } from "react"

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const ref = useRef(null)
  const onChange = (event) => setValue(event.target.value)

  useEffect(() => {
    ref.current?.focus()
  }, [])

  // return {
  //   ref: ref,
  //   className: "text-4xl p-3 mt-5 bg-slate-600",
  //   spellCheck: false,
  //   value: value,
  //   onChange: { handleInputChange },
  // }
  const className = "text-4xl p-3 mt-5 bg-slate-600"
  const spellCheck = false
  return {
    ref,
    className,
    spellCheck,
    value,
    onChange,
  }
}
