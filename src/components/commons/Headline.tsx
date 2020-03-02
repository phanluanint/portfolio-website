import React from 'react'

const Headline: React.FC = ({ children }) => {
  return (
    <div className="relative mb-10">
      <h3 className="text-4xl text-white uppercase font-bold">{children}</h3>
      <div className="relative">
        <div className="w-24 h-1 bg-blue-900 rounded  absolute left-0 top-0" />
        <div className="w-8 h-1 bg-blue-1000 rounded absolute left-0 top-0" />
      </div>
      <div className="absolute top-0 left-0 text-6xl uppercase font-bold opacity-10 mt-6">{children}</div>
    </div>
  )
}

export default Headline
