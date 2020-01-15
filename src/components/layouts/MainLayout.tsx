import React from 'react'
import Head from 'next/head'

interface Props {
  children: React.ReactChild
}

const MainLayout: React.FC<Props> = ({ children }) => (
  <>
    <Head>
      <title>Hello world</title>
    </Head>
    <div className="bg-gray-800 text-white">{children}</div>
  </>
)

export default MainLayout
