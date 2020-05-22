import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import SeoHead from './SeoHead'
import { SeoConfig } from '../../types/SeoConfig'

interface Props {
  seoConfig: SeoConfig
}

const MainLayout: React.FC<Props> = ({ children, seoConfig }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('webfontloader').then(WebFont =>
        WebFont.load({
          google: {
            families: ['Nunito:400,600,700,900:vietnamese'],
          },
        }),
      )
    }
  }, [])
  return (
    <>
      <SeoHead seoConfig={seoConfig}>
        <link rel="dns-prefetch" href="https://fonts.gstatic.com/" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* <link */}
        {/*  href="https://fonts.googleapis.com/css?family=Nunito:400,600,700,900&display=swap&subset=vietnamese" */}
        {/*  rel="stylesheet" */}
        {/* /> */}
        <link href="/icons/style.css" rel="stylesheet" />
      </SeoHead>
      <div className="flex bg-gray-1100 h-screen font-body">
        <Sidebar />
        <div className="w-full lg:w-4/5 xl:w-5/6 flex-grow text-white relative overflow-hidden">
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
}

export default MainLayout
