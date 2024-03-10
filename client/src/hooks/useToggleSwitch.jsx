import { useState } from "react"

export default function useToggleSwitch(initialValue) {
  const [isChecked, setIsChecked] = useState(initialValue)
  const onChange = (event) => setIsChecked(!isChecked)

  return {
    isChecked,
    onChange,
  }
}
