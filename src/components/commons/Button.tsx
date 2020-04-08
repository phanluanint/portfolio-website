import React from 'react'

interface Props {
  label: string
  className?: string
  disabled?: boolean
  onClick?: () => void
}

const Button: React.FC<Props> = ({ label, className, disabled = false, ...otherProps }) => {
  return (
    <button
      type="button"
      {...otherProps}
      disabled={disabled}
      className="px-10 py-3 text-white bg-blue-1000 hover:bg-blue-900 transition duration-300 ease-out"
    >
      {label}
    </button>
  )
}

export default Button
