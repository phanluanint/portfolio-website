import React from 'react'

interface InputTextProps {
  name: string
  value: string
  label: string
  error?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const InputText: React.FC<InputTextProps> = ({ name, value, label, error, onChange }) => {
  return (
    <div className="relative my-8">
      <label
        className={`absolute top-0 left-0 text-gray-500 -mt-3 ml-3 px-3 bg-gray-1100 ${error && 'text-red-500'}`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={`w-full border border-gray-800 bg-transparent p-3 text-gray-400 outline-none hover:outline-none focus:border-gray-600 transition duration-300 ease-out  ${
          error && 'border-red-500'
        }`}
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="text-sm text-red-500 px-6 pt-2">{error}</div>}
    </div>
  )
}

export default InputText
