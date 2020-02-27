import React from 'react'
import Head from 'next/head'

interface Props {
  children: React.ReactChild
}

const MainLayout: React.FC<Props> = ({ children }) => (
  <>
    <Head>
      <title>Hello world</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap&subset=vietnamese"
        rel="stylesheet"
      />
      <link href="/icons/style.css" rel="stylesheet" />
    </Head>
    <div>{children}</div>
  </>
)

export default MainLayout
