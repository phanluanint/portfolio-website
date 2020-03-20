import React from 'react'
import { NextPage } from 'next'
import '../styles/app.css'
import MainLayout from '../components/layouts/MainLayout'
import AboutContent from '../components/pages/about'

const AboutPage: NextPage = () => {
  return (
    <MainLayout>
      <AboutContent />
    </MainLayout>
  )
}

export default AboutPage