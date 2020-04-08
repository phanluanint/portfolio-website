import React from 'react'
import Head from 'next/head'
import { SeoConfig } from '../../types/SeoConfig'

interface SeoHeadProps {
  seoConfig: SeoConfig
}
const SeoHead: React.FC<SeoHeadProps> = ({ children, seoConfig }) => {
  return (
    <Head>
      <title>{seoConfig.title}</title>
      <meta name="description" content={seoConfig.description} />
      {children}
    </Head>
  )
}

export default SeoHead
