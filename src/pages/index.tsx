import React from 'react'
import { NextPage } from 'next'
import IndexContent from '../components/pages/index/index'
import MainLayout from '../components/layouts/MainLayout'
import { SeoConfig } from '../types/SeoConfig'

const seoConfig: SeoConfig = {
  title: "Hi, I'm Luan Phan",
  description: 'This is the profile of Luan Phan',
}
const IndexPage: NextPage = () => {
  return (
    <MainLayout seoConfig={seoConfig}>
      <IndexContent />
    </MainLayout>
  )
}

IndexPage.getInitialProps = async (): Promise<object> => {
  return {
    IndexPage: {
      counter: { count: 2 },
      cart: {
        items: [
          {
            name: 'Ahihi',
            price: 200,
          },
        ],
      },
    },
  }
}

export default IndexPage
