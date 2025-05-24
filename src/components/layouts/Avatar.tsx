import React from 'react'

const Avatar: React.FC = () => {
  return (
    <div className="w-full h-56 flex items-center justify-center">
      <div className="w-40 h-40 p-2 bg-gray-500 rounded-full">
        <img className="rounded-full" src="/images/1671976418537.jpg" alt="Avatar" />
      </div>
    </div>
  )
}

export default Avatar
