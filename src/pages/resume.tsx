import React from 'react'
import { NextPage } from 'next'
import '../styles/app.css'
import MainLayout from '../components/layouts/MainLayout'
import ResumeContent from '../components/pages/resume'

const ResumePage: NextPage = () => {
  return (
    <MainLayout>
      <ResumeContent />
    </MainLayout>
  )
}

export default ResumePage
