import React from 'react'
import PageContainer from '../../commons/PageContainer'
import Headline from '../../commons/Headline'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const ContactContent: React.FC = () => {
  return (
    <PageContainer>
      <Headline>Contact me</Headline>
      <div className="flex-col md:flex-row flex">
        <div className="w-full md:w-1/2">
          <div className="mr-0: md:mr-4">
            <div className="text-2xl">Get In Touch</div>
            <ContactForm />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="ml-0 md:ml-4">
            <ContactInfo />
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default ContactContent
