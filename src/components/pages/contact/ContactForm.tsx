import React, { useState } from 'react'
import InputText from '../../commons/InputText'
import InputTextarea from '../../commons/InputTextarea'
import Button from '../../commons/Button'
import { isEmail } from '../../../utils/validator'

interface FormFields {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

interface ContactAPIResult {
  message: string
}

const ContactForm: React.FC = () => {
  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [response, setResponse] = useState({
    success: false,
    message: '',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    const newFields = { ...fields }
    const newErrors = { ...errors }
    if (name === 'name' || name === 'email' || name === 'subject' || name === 'message') {
      newFields[name] = value
      delete newErrors[name]
    }
    setFields(newFields)
    setErrors(newErrors)
  }

  const setErrorMessage = (): void => {
    setResponse({
      success: false,
      message: 'Something went wrong, please try again later.',
    })
  }

  const validateForm = (): boolean => {
    const formError: FormErrors = {}
    if (!fields.name) formError.name = 'Please enter your name'
    if (!fields.email) {
      formError.email = 'Please enter your email'
    } else if (!isEmail(fields.email)) {
      formError.email = 'Please enter a valid email'
    }
    if (!fields.subject) formError.subject = 'Please enter your subject'
    if (!fields.message) formError.message = 'Please enter your message'
    setErrors(formError)
    return Object.keys(formError).length === 0
  }

  const onSubmit = async (): Promise<void> => {
    if (validateForm()) {
      try {
        const rs = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(fields),
        })
        if (!rs || rs.status !== 200) {
          setErrorMessage()
          return
        }

        const json: ContactAPIResult = await rs.json()
        setResponse({
          success: true,
          message: json.message,
        })
      } catch (e) {
        setErrorMessage()
      }
    }
  }

  return (
    <div className="mb-8">
      <InputText name="name" value={fields.name} onChange={onChange} error={errors.name} label="Enter your name*" />
      <InputText name="email" value={fields.email} onChange={onChange} error={errors.email} label="Enter your email*" />
      <InputText
        name="subject"
        value={fields.subject}
        onChange={onChange}
        error={errors.subject}
        label="Enter your subject*"
      />
      <InputTextarea
        name="message"
        value={fields.message}
        onChange={onChange}
        error={errors.message}
        label="Enter your message*"
      />
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
