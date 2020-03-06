import React from 'react'

const ServiceItem = () => {
  return (
    <div className="flex-initial p-4 w-1/3">
      <div className="border-gray-800 border-t-6 px-5 py-6 bg-gray-1000 hover:border-blue-1000 transition duration-300 ease-out">
        <div className="mb-5">
          <div className="icon-github text-4xl text-blue-1000" />
        </div>
        <div className="text-2xl mt-3">Web Development</div>
        <div className="w-12 h-2px bg-gray-600 rounded opacity-25 my-4" />
        <div className="text-lg text-gray-500 mt-1">
          I am a frontend web developer. I can provide clean code and pixel perfect design.
        </div>
      </div>
    </div>
  )
}

export default ServiceItem
