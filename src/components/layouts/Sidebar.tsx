import React from 'react'
import Avatar from './Avatar'
import MainMenu from './MainMenu'

const Sidebar = () => {
  return (
    <>
      <Avatar />
      <div className="border-b border-gray-800" />
      <MainMenu />
    </>
  )
}

export default Sidebar
