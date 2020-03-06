import React from 'react'
import { NextPage } from 'next'
import '../styles/app.css'
import IndexContent from '../components/pages/index/index'
import MainLayout from '../components/layouts/MainLayout'

const IndexPage: NextPage = () => {
  return (
    <MainLayout>
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
