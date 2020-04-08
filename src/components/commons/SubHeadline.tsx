import React from 'react'

interface Props {
  iconName: string
  text: string
}

const SubHeadline: React.FC<Props> = ({ iconName, text }) => {
  return (
    <div className="flex text-3xl items-center font-semibold mb-8">
      <div className="text-gray-500">
        <div className={iconName} />
      </div>
      <div className="ml-2">{text}</div>
    </div>
  )
}

export default SubHeadline
