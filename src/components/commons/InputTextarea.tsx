import React from 'react'

interface InputTextareaProps {
  name: string
  value: string
  label: string
  rows?: number
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}
const InputTextarea: React.FC<InputTextareaProps> = ({ name, value, label, rows, onChange }) => {
  return (
    <div className="relative my-8">
      <label className="absolute top-0 left-0 text-gray-500 -mt-3 ml-3 px-3 bg-gray-1100" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="w-full border border-gray-800 bg-transparent p-3 text-gray-400 outline-none hover:outline-none focus:border-gray-600 transition duration-300 ease-out"
        name={name}
        id={name}
        value={value}
        rows={rows || 5}
        onChange={onChange}
      />
    </div>
  )
}

export default InputTextarea
