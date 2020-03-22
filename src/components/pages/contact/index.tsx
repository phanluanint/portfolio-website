import React from 'react'
import PageContainer from '../../commons/PageContainer'
import Headline from '../../commons/Headline'
import ContactForm from './ContactForm'

const ContactContent: React.FC = () => {
  return (
    <PageContainer>
      <Headline>Contact me</Headline>
      <div className="flex">
        <div className="w-1/2">
          <div className="text-2xl">Get In Touch</div>
          <ContactForm />
        </div>
        <div className="w-1/2">Hello</div>
      </div>
    </PageContainer>
  )
}

export default ContactContent
