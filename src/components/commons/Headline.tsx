import React from 'react'

const Headline: React.FC<{  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className="relative mb-16 mt-16 md:mt-32 w-full">
      <h3 className="text-4xl md:text-4-5xl text-white uppercase font-bold">{children}</h3>
      <div className="relative mt-1">
        <div className="w-26 h-5px bg-blue-1000 rounded absolute left-0 top-0 opacity-25" />
        <div className="w-9 h-5px bg-blue-1000 rounded absolute left-0 top-0" />
      </div>
      <div className="text-6xl md:text-7xl absolute top-0 left-0 uppercase font-black opacity-3 mt-6 whitespace-no-wrap w-full overflow-x-hidden">
        {children}
      </div>
    </div>
  )
}

export default Headline
