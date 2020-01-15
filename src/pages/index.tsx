import React from 'react'
import { NextPage } from 'next'
import '../styles/index.css'
import IndexContent from '../components/page-index/IndexContent'
import MainLayout from "../components/layouts/MainLayout";

const Home: NextPage = () => {
  return (
      <MainLayout>
        <IndexContent/>
      </MainLayout>
      )
}
Home.getInitialProps = async () => {
  return {
    counter: { count: 2 },
    cart: {
      items: [
        {
          name: 'Ahihi',
          price: 200
        }
      ]
    }
  }
}

export default Home