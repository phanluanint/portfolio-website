import React from 'react'
import { NextPage } from 'next'
import '../styles/app.css'
import MainLayout from '../components/layouts/MainLayout'
import ContactContent from '../components/pages/contact'
import { SeoConfig } from '../types/SeoConfig'

const seoConfig: SeoConfig = {
  title: "Hi, I'm Luan Phan",
  description: 'This is the profile of Luan Phan',
}
const ContactPage: NextPage = () => {
  return (
    <MainLayout seoConfig={seoConfig}>
      <ContactContent />
    </MainLayout>
  )
}

export default ContactPage
