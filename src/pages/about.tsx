import React from 'react'
import { NextPage } from 'next'
import '../styles/app.css'
import MainLayout from '../components/layouts/MainLayout'
import AboutContent from '../components/pages/about'
import { SeoConfig } from '../types/SeoConfig'

const seoConfig: SeoConfig = {
  title: "Hi, I'm Luan Phan",
  description: 'This is the profile of Luan Phan',
}
const AboutPage: NextPage = () => {
  return (
    <MainLayout seoConfig={seoConfig}>
      <AboutContent />
    </MainLayout>
  )
}

export default AboutPage
