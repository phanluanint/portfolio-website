import React from 'react'
import { NextPage } from 'next'
import MainLayout from '../components/layouts/MainLayout'
import ResumeContent from '../components/pages/resume'
import { SeoConfig } from '../types/SeoConfig'

const seoConfig: SeoConfig = {
  title: "Hi, I'm Luan Phan",
  description: 'This is the profile of Luan Phan',
}
const ResumePage: NextPage = () => {
  return (
    <MainLayout seoConfig={seoConfig}>
      <ResumeContent />
    </MainLayout>
  )
}

export default ResumePage
