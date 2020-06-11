import React from 'react'
import { NextPage } from 'next'
import IndexContent from '../components/pages/index/index'
import MainLayout from '../components/layouts/MainLayout'
import { SeoConfig } from '../types/SeoConfig'

const seoConfig: SeoConfig = {
  title: "Luan Phan - A Full-stack developer :)",
  description: 'A software engineer with 4+ years of practice, most experienced in web development. I specialize in building Booking Websites, Web Services, SSR Single Page Application, E-learning Services and POS System.',
}
const IndexPage: NextPage = () => {
  return (
    <MainLayout seoConfig={seoConfig}>
      <IndexContent />
    </MainLayout>
  )
}

export default IndexPage
