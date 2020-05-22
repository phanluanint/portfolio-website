import React from 'react'
import PageContainer from '../../commons/PageContainer'
import Headline from '../../commons/Headline'
import Skill from './Skill'
import SubHeadline from '../../commons/SubHeadline'
import Timeline from './Timeline'

const timelines = [
  {
    period: '2019 - Present',
    title: 'Full-stack Software Engineer',
    subTitle: 'MillerGold Technology Solutions',
    content: 'To be continue...',
  },
  {
    period: '2018 - 2019',
    title: 'Full-stack Developer',
    subTitle: 'Tinselworks Sdn Bhd',
    content: (
      <div>
        I started working as a Sub-Tech Leader and Full-stack developer on the company products, during this time I
        accomplished <br />
        <ul className="list-disc list-inside">
          <li>Designed, developed, deployed and maintained a point of sale application using ReactJS and NodeJS</li>
          <li>
            Worked with ElectronJS and ReactJS to built Desktop cross-platform apps for Windows, macOS, and Linux
            connected with hardware (Thermal Printer & Barcode Scanner)
          </li>
          <li>Wrote Ethereum Smart Contract with Solidity language</li>
          <li>Implemented ETH Smart Contact to a web game built with NodeJS, Vanilla Javascript</li>
          <li>Designed AWS architecture for ETH blockchain game</li>
          <li>Setup CI for ETH blockchain game with Gitlab CI for automatic testing and deployment</li>
          <li>Wrote unit tests and end-to-end tests using MochaJS</li>
          <li>Set up GETH server and implemented security for ETH blockchain network</li>
          <li>Managed a small team with three developers</li>
        </ul>
        <span className="text-white">Technologies & tools used:</span> NodeJS, Serverless, ReactJS, ElectronJS, MongoDB,
        HTML, SCSS, Webpack, Web3JS, SVG, Solidity, AWS EC2, Gitlab CI, AWS S3
      </div>
    ),
  },
  {
    period: '2016 - 2018',
    title: 'Full-stack Web Developer',
    subTitle: 'Edgeworks Software Ltd',
    content: (
      <div>
        I worked as a Full-stack developer on multiple projects and accomplished:
        <br />
        <ul className="list-disc list-inside">
          <li>Designed and optimized heavy MySQL queries for performance improvement</li>
          <li>Develop on both backend and frontend, including a lot of SEO stuff for a booking system</li>
          <li>Full-stack developer for end-to-end SaaS/Cloud apps development</li>
          <li>Forked and customized some open-source to be integrated as micro-services</li>
          <li>Customized UI on multiple platforms for consistently of all micro-services</li>
          <li>Built and deployed Docker containers for micro-services</li>
          <li>Wrote OpenShift templates for SaaS testing and deployment using Openshift service</li>
        </ul>
        <span className="text-white">Technologies & tools used:</span> ReactJS, NodeJS, PHP (Yii2, Laravel &
        CodeIgniter), Wordpress, MongoDB, MySQL, Docker, Nginx, Apache, Linux, Heroku, OpenShift, SCSS, Gulp, JIRA,
        Bitbucket, Slack
      </div>
    ),
  },
  {
    period: '2015 - 2016',
    title: 'Web Developer',
    subTitle: 'Web Developer | VNAppTech Co Ltd',
    content: (
      <div>
        I worked directly with clients to receive their requirements, researched solutions independently to initialized,
        developed, deployed and maintained multiple websites using PHP (CodeIgniter, WordPress), HTML, CSS, JavaScript,
        and JQuery.
      </div>
    ),
  },
]

const educationTimelines = [
  {
    period: '2011 - 2016',
    title: 'Lac Hong University',
    subTitle: 'Software Engineer (major in Information Technology)',
    content: (
      <>
        <b>GPA:</b> 7.9/10
        <br />
        <b>Relevant Coursework:</b> Software Development, Web Development, Data structure and algorithm, Relational
        Database
      </>
    ),
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
      <Timeline timelines={educationTimelines} />
    </PageContainer>
  )
}

export default ResumeContent
