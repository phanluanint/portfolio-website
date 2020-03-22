import React from 'react'
import InputText from '../../commons/InputText'
import InputTextarea from '../../commons/InputTextarea'

const ContactForm = () => {
  return (
    <div>
      <InputText name="name" value="" label="Enter your name*" />
      <InputText name="email" value="" label="Enter your email*" />
      <InputText name="subject" value="" label="Enter your subject*" />
      <InputTextarea name="message" value="" label="Enter your message*" />
    </div>
  )
}

export default ContactForm
