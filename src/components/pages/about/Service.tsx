import React from 'react'
import Headline from '../../commons/Headline'
import ServiceItem from './ServiceItem'

const services = [
  {
    icon: 'icon-code',
    name: 'Web Development',
    description: 'Start to build your professional website with just an idea.',
  },
  {
    icon: 'icon-mobile',
    name: 'App Development',
    description: 'Get your mobile app ready for billion users from the stores.',
  },
  {
    icon: 'icon-ubuntu',
    name: 'Server Management',
    description: 'Fully manage your Linux server with over 99% uptime.',
  },
]
const Service: React.FC = () => {
  return (
    <>
      <Headline>Services</Headline>
      <div className="flex-col md:flex-row flex -ml-4 -mr-4">
        {services.map(service => (
          <ServiceItem key={service.name} service={service} />
        ))}
      </div>
    </>
  )
}

export default Service
