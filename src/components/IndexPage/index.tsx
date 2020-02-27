import React from 'react'
import Particles from 'react-particles-js'
import Link from 'next/link'

const IndexContent: React.FC = () => {
  return (
    <div className="flex bg-gray-1100 h-screen font-body">
      <div className="flex flex-col w-1/6 text-gray-500 text-center bg-gray-1000 mr-2 border-r border-gray-800">
        <div className="px-16 py-8">
          <div className="p-2 bg-gray-500 rounded-full">
            <img className="rounded-full" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
          </div>
        </div>
        <div className="border-b border-gray-800" />
        <div className="flex-1 flex items-center justify-center">
          <ul className="left-menu m-0 p-0 w-full px-2">
            {['Home', 'About', 'Resume', 'Portfolio', 'Contact'].map(menu => (
              <li>
                <Link href="/">
                  <a
                    className={`block uppercase font-semibold py-2 ${
                      menu === 'Home' ? 'active bg-blue-1000 text-white' : 'hover:text-blue-1000 '
                    }`}
                  >
                    {menu}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-grow text-white text-center px-4 py-2 m-2 relative overflow-hidden ">
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
              Hi, I am <span className="text-blue-1000">Luan Phan</span>
            </div>
            <div className="text-xl max-w-2xl text-gray-500">
              I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more
              & more interactive with web animations.
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
      </div>
    </div>
  )
}

export default IndexContent
