import React from 'react'
import Headline from '../../commons/Headline'
import ServiceItem from './ServiceItem'

const Service: React.FC = () => {
  return (
    <>
      <Headline>Services</Headline>
      <div className="flex">
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
      </div>
    </>
  )
}

export default Service
