import React, { useState } from 'react'
import Avatar from './Avatar'
import MainMenu from './MainMenu'

const Sidebar: React.FC = () => {
  const [show, setShow] = useState(false)
  return (
    <div
      className={`${
        show ? 'ml-0' : '-ml-56'
      }  lg:ml-0  w-56 fixed h-full z-20 lg:static lg:w-1/5 xl:w-1/6 flex flex-col text-gray-500 bg-gray-1000 border-r border-gray-800 transition-all duration-200 ease-out`}
    >
      <button
        type="button"
        onClick={(): void => setShow(!show)}
        className="block lg:hidden outline-none focus:outline-none absolute right-0 top-0 w-10 h-10 border border-gray-700 flex items-center justify-center -mr-10 mt-4 bg-gray-900 border-l-0"
        aria-label="Toogle Menu"
      >
        <span className={show ? 'icon-close' : 'icon-menu'} />
      </button>
      <Avatar />
      <div className="border-b border-gray-800" />
      <MainMenu />
    </div>
  )
}

export default Sidebar
