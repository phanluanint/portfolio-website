import React from 'react'
import { NextPage } from 'next'
import '../styles/index.css'
import IndexContent from '../components/page-index/IndexContent'

const Home: NextPage = () => {
  return <IndexContent/>
}
Home.getInitialProps = async ({ req }) => {
  return { counter: { count: 2 } }
}

export default Home