import React from 'react'
import Particles from 'react-particles-js'
import IcoMoon from '../commons/IcoMoon'

const IndexContent: React.FC = () => {
  return (
    <div className="flex bg-gray-1100 h-screen font-body">
      <div className="flex-initial w-1/6 text-gray-700 text-center bg-gray-1000 px-16 py-6 mr-2 border-r border-gray-800">
        <div className="p-2 bg-gray-500 rounded-full">
          <img
            className="rounded-full"
            src="https://secure.gravatar.com/avatar/7a5c67098c2e2aa24c18346b0433496b?s=300"
            alt="Avatar"
          />
        </div>
      </div>
      <div className="flex-grow text-white text-center px-4 py-2 m-2 relative overflow-hidden ">
        <div className="absolute w-full h-full opacity-25 z-0">
          <Particles />
        </div>
        <div className="flex h-full items-center justify-center z-10 relative">
          <div className="flex flex-col">
            <div className="text-5xl font-bold">
              Hi, I am <span className="text-blue-1000">Luan Phan</span>
            </div>
            <div className="text-xl max-w-2xl text-gray-600">
              I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more
              & more interactive with web animations.
            </div>
            <div>
              <div className="rounded-full bg-white inline-block p-4 m-2">
                <IcoMoon icon="facebook2" size="30" color="red" />
              </div>
              <div className="rounded-full bg-white inline-block p-4 m-2">
                <IcoMoon icon="linkedin" size="30" color="red" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexContent
