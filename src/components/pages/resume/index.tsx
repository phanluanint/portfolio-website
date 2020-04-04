import React from 'react'
import PageContainer from '../../commons/PageContainer'
import Headline from '../../commons/Headline'
import Skill from './Skill'
import SubHeadline from '../../commons/SubHeadline'
import Timeline from './Timeline'

const timelines = [
  {
    period: '2018 - Present',
    title: 'Frontend Web Developer',
    subTitle: 'ACME Company',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
  },
  {
    period: '2018 - Present',
    title: 'Frontend Web Developer',
    subTitle: 'ACME Company',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
  },
]
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
      <SubHeadline iconName="icon-briefcase" text="Working Experience" />
      <Timeline timelines={timelines} />
      <SubHeadline iconName="icon-graduation" text="Education Qualification" />
      <Timeline timelines={timelines} />
    </PageContainer>
  )
}

export default ResumeContent
