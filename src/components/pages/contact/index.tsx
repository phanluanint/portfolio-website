import React from 'react'
import PageContainer from '../../commons/PageContainer'
import Headline from '../../commons/Headline'
import ContactInfo from './ContactInfo'
import { Widget } from '@typeform/embed-react'

const ContactContent: React.FC = () => {
  return (
    <PageContainer>
      <Headline>Contact me</Headline>
      <div className="flex-col md:flex-row flex">
        <div className="w-full md:w-2/3">
          <div className="mr-0: md:mr-4">
            <Widget id="MSIWdcLI" style={{height: 400}}/>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="ml-0 md:ml-4">
            <ContactInfo />
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default ContactContent
