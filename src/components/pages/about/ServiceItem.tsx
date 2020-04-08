import React from 'react'

interface ServiceItemProps {
  service: {
    icon: string
    name: string
    description: string
  }
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
  return (
    <div className="w-full md:w-1/3 flex-initial p-4">
      <div className="border-gray-800 border-t-6 px-5 py-6 bg-gray-1000 hover:border-blue-1000 transition duration-300 ease-out">
        <div className="mb-5">
          <div className={`${service.icon} text-3xl text-blue-1000`} />
        </div>
        <div className="text-2xl mt-3">{service.name}</div>
        <div className="w-12 h-2px bg-gray-600 rounded opacity-25 my-4" />
        <div className="text-lg text-gray-500 mt-1">{service.description}</div>
      </div>
    </div>
  )
}

export default ServiceItem
