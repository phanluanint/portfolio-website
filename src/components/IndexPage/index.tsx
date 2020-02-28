import React from 'react'
import Particles from 'react-particles-js'
import Link from 'next/link'

const IndexContent: React.FC = () => {
  return (
    <>
      <div className="flex absolute w-full h-full opacity-25 z-0">
        <div className="w-1/5 border-r border-gray-1000" />
        <div className="w-1/5 border-r border-gray-1000" />
        <div className="w-1/5 border-r border-gray-1000" />
        <div className="w-1/5 border-r border-gray-1000" />
      </div>
      <div className="absolute w-full h-full opacity-25 z-1">
        <Particles />
      </div>
      <div className="flex h-full items-center justify-center z-10 relative">
        <div className="flex flex-col">
          <div className="text-5xl font-bold">
            This is <span className="text-blue-1000">The Text</span>
          </div>
          <div className="text-xl max-w-2xl text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </div>
          <div className="flex items-center justify-center  mt-5">
            {['icon-facebook', 'icon-linkedin', 'icon-github'].map(item => (
              <div className="text-xl transition duration-300 ease-out border-2 border-gray-800 text-gray-500 flex items-center justify-center rounded-full bg-transparent inline-block m-2 w-12 h-12 hover:border-blue-1000 hover:text-blue-1000 cursor-pointer">
                <div className={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexContent
