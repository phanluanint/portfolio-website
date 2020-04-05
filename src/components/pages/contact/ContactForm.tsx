import React, { SetStateAction, useState } from 'react'
import InputText from '../../commons/InputText'
import InputTextarea from '../../commons/InputTextarea'
import Button from '../../commons/Button'

interface ContactFormState {
  value: {
    name: string
    email: string
    subject: string
    message: string
  }
}

const ContactForm: React.FC = () => {
  const [contact, setContact] = useState<ContactFormState>({
    value: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })
  const [response, setResponse] = useState({
    success: false,
    message: '',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    const state = { ...contact }
    if (name === 'name' || name === 'email' || name === 'subject' || name === 'message') {
      state.value[name] = value
    }
    setContact(state)
  }

  const onSubmit = (): void => {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact.value),
    })
      .then(rs => rs.json())
      .then(data => {
        setResponse({
          success: true,
          message: data.message,
        })
      })
      .catch(error => {
        setResponse({
          success: false,
          message: 'Something went wrong, please try again later.',
        })
      })
  }

  const { value } = contact

  return (
    <div>
      <InputText name="name" value={value.name} onChange={onChange} label="Enter your name*" />
      <InputText name="email" value={value.email} onChange={onChange} label="Enter your email*" />
      <InputText name="subject" value={value.subject} onChange={onChange} label="Enter your subject*" />
      <InputTextarea name="message" value={value.message} onChange={onChange} label="Enter your message*" />
      <Button label="Submit" onClick={onSubmit} />
      {response.message && (
        <div
          className={`border px-5 py-3 mt-8 ${
            response.success ? 'text-green-500 border-green-500' : 'border-red-500 text-red-500'
          }`}
        >
          {response.message}
        </div>
      )}
    </div>
  )
}

export default ContactForm
