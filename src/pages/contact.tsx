import React from 'react'
import { NextPage } from 'next'
import '../styles/app.css'
import MainLayout from '../components/layouts/MainLayout'
import ContactContent from '../components/pages/contact'

const ContactPage: NextPage = () => {
  return (
    <MainLayout>
      <ContactContent />
    </MainLayout>
  )
}

export default ContactPage
