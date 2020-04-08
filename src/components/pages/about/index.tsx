import React from 'react'
import PageContainer from '../../commons/PageContainer'
import AboutMe from './AboutMe'
import Service from './Service'

const AboutContent: React.FC = () => {
  return (
    <PageContainer>
      <AboutMe />
      <Service />
    </PageContainer>
  )
}

export default AboutContent
