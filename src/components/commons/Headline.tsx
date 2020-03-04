import React from 'react'

const Headline: React.FC = ({ children }) => {
  return (
    <div className="relative mb-16 mt-32">
      <h3 className="text-4.5xl text-white uppercase font-bold">{children}</h3>
      <div className="relative mt-1">
        <div className="w-26 h-5px bg-blue-1000 rounded absolute left-0 top-0 opacity-25" />
        <div className="w-9 h-5px bg-blue-1000 rounded absolute left-0 top-0" />
      </div>
      <div className="absolute top-0 left-0 text-7xl uppercase font-black opacity-3 mt-6">{children}</div>
    </div>
  )
}

export default Headline
