import React from 'react'
import Head from 'next/head'
import Sidebar from './Sidebar'

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
    <div className="flex bg-gray-1100 h-screen font-body">
      <div className="flex flex-col w-1/6 text-gray-500 text-center bg-gray-1000 mr-2 border-r border-gray-800">
        <Sidebar />
      </div>
      <main className="flex-grow text-white text-center px-4 py-2 m-2 relative overflow-hidden">{children}</main>
    </div>
    <div>{children}</div>
  </>
)

export default MainLayout
