import React from 'react'
import Particles from 'react-particles-js'

const IndexContent: React.FC = () => {
  return (
    <>
      <div className="absolute w-full h-full opacity-25 z-1">
        <Particles />
      </div>
      <div className="flex w-full h-full items-center justify-center z-10 relative">
        <div className="flex flex-col p-8">
          <div className="text-5xl font-bold text-center">
            Hello, I'm <span className="text-blue-1000">Luan Phan</span>
          </div>
          <div className="text-xl max-w-2xl text-gray-500 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </div>
          <div className="flex items-center justify-center  mt-5">
            {['icon-facebook', 'icon-linkedin', 'icon-github'].map(item => (
              <div
                key={item}
                className="text-xl transition duration-300 ease-out border-2 border-gray-800 text-gray-500 flex items-center justify-center rounded-full bg-transparent inline-block m-2 w-12 h-12 hover:border-blue-1000 hover:text-blue-1000 cursor-pointer"
              >
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
