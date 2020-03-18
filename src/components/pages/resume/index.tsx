import React from 'react'
import PageContainer from '../../commons/PageContainer'
import Headline from '../../commons/Headline'
import Skill from './Skill'
import SubHeadline from '../../commons/SubHeadline'

const ResumeContent: React.FC = () => {
  return (
    <PageContainer>
      <Headline>My Skills</Headline>
      <div className="flex flex-wrap -ml-4 -mr-4">
        <Skill image="1269842.svg" title="NodeJS" />
        <Skill image="1296845.svg" title="ReactJS" />
        <Skill image="652577.svg" title="Linux" />
        <Skill image="652580.svg" title="PHP" />
        <Skill image="652583.svg" title="HTML5" />
        {/* <Skill image="652584.svg" title="CSS3" /> */}
        <Skill image="652578.svg" title="Git" />
      </div>
      <Headline>Resume</Headline>
      <SubHeadline iconName="icon-github" text="Working Experience" />
    </PageContainer>
  )
}

export default ResumeContent
