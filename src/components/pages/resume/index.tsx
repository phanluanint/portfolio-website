import React from 'react'
import PageContainer from '../../commons/PageContainer'
import Headline from '../../commons/Headline'
import Skill from './Skill'
import SubHeadline from '../../commons/SubHeadline'
import Timeline from './Timeline'

const timelines = [
  {
    period: '2019 - Present',
    title: 'Full-stack Software Engineer / Tech Lead',
    subTitle: 'Coder Trove',
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Built and maintained a scalable cloud-native Invoice Financing Platform while contributing to system architecture and infrastructure design.
        </li>
        <li>
          Designed secure AWS infrastructure (VPC, ECS, S3, etc...) using Terraform (IaC), AWS CDK and AWS Pipelines.
        </li>
        <li>
          Modernized a legacy Node.js app by upgrading versions and migrating to TypeScript for maintainability.
        </li>
        <li>
          Integrated banking and accounting systems (ANZ, Xero, MYOB) to automate transactions and invoicing workflows.
        </li>
        <li>
          Implemented CI/CD pipelines (Bitbucket + AWS) and enforced code quality with SonarCloud, ESLint, and Prettier.
        </li>
        <li>
          Led a team of 7+ developers; conducted code reviews, mentored engineers, and handled incident response.
        </li>
        <li>
          Introduced internal code generators to improve team productivity and consistency.
        </li>
        <li>
          Maintained secure, stable production environments and handled hotfixes and recovery operations.
        </li>
        <li>
          Transformed a monolithic application into multiple products using the Strangler Fig pattern.
        </li>
        <li>
          Designed and implemented a fine-grained authorization system to enhance security and access control.
        </li>
      </ul>
    ),
  },
  {
    period: '2018 - 2019',
    title: 'Full-stack Developer',
    subTitle: 'Tinselworks Sdn Bhd',
    content: (
      <div>
        <ul className="list-disc list-inside">
          <li>Architected AWS infrastructure for ETH blockchain gaming platform (EC2, S3, GitLab CI).</li>
          <li>Built and deployed smart contracts using Solidity and integrated them into Node.js-based web games.</li>
          <li>Designed and developed a desktop POS system (ElectronJS + Node.js) with hardware integrations (printers, scanners).</li>
          <li>Managed a team of 2–3 developers; planned solutions, monitored progress, and collaborated with PMs.</li>
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
      <ul className="list-disc list-inside">
        <li>Designed, developed, and maintained small to mid-sized Vietnamese web projects.</li>
        <li>Worked directly with clients on requirements, solution planning, and delivery.</li>
      </ul>
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
