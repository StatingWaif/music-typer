import { useState } from "react"

export default function ToggleSwitch({ isChecked, onChange }) {
  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`box block h-8 w-14 rounded-full ${
            isChecked ? "bg-orange-600" : "bg-green-600"
          }`}
        ></div>
        <div
          className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
            isChecked ? "translate-x-full" : ""
          }`}
        ></div>
      </div>
    </label>
  )
}
