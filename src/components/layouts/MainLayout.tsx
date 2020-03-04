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
        href="https://fonts.googleapis.com/css?family=Nunito:400,600,700,900&display=swap&subset=vietnamese"
        rel="stylesheet"
      />
      <link href="/icons/style.css" rel="stylesheet" />
    </Head>
    <div className="flex bg-gray-1100 h-screen font-body">
      <div className="flex flex-col w-1/6 text-gray-500 bg-gray-1000 border-r border-gray-800">
        <Sidebar />
      </div>
      <div className="flex-grow w-5/6 text-white relative overflow-hidden">
        <div className="flex absolute w-full h-full z-0">
          <div className="w-1/5 border-r border-gray-1000" />
          <div className="w-1/5 border-r border-gray-1000" />
          <div className="w-1/5 border-r border-gray-1000" />
          <div className="w-1/5 border-r border-gray-1000" />
        </div>
        <main className="block w-full h-full z-1 relative overflow-auto">{children}</main>
      </div>
    </div>
  </>
)

export default MainLayout
