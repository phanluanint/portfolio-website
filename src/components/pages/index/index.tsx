import React from 'react'
import Particles from 'react-particles-js'

const socials = [
  { link: 'https://www.linkedin.com/in/phanluanint/', icon: 'icon-linkedin' },
  { link: 'https://github.com/phanluanint', icon: 'icon-github' },
  { link: 'https://www.facebook.com/phan.luan.initialize/', icon: 'icon-facebook' },
]
const IndexContent: React.FC = () => {
  return (
    <>
      <div className="absolute w-full h-full opacity-25 z-1">
        <Particles width="100%" height="100vh" />
      </div>
      <div className="flex w-full h-full items-center justify-center z-10 relative">
        <div className="flex flex-col p-8">
          <div className="text-5xl font-bold text-center">
            Hi, I'm <span className="text-blue-1000">Luan Phan</span>
          </div>
          <div className="text-xl max-w-2xl text-gray-500 text-justify">
            I'm a software engineer with 4+ years of practice, most experienced in web development. I specialize in
            building Booking Websites, Web Services, SSR Single Page Application, E-learning Services and POS System.
          </div>
          <div className="flex items-center justify-center  mt-5">
            {socials.map(item => (
              <a
                key={item.icon}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl transition duration-300 ease-out border-2 border-gray-800 text-gray-500 flex items-center justify-center rounded-full bg-transparent inline-block m-2 w-12 h-12 hover:border-blue-1000 hover:text-blue-1000 cursor-pointer"
              >
                <div className={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexContent
