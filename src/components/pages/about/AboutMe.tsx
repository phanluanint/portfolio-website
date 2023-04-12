import React from 'react'
import Link from 'next/link'
import Headline from '../../commons/Headline'

const aboutMeInfo = [
  { label: 'Full Name', value: 'Luan Phan Minh' },
  { label: 'Year of Birth', value: '1993' },
  { label: 'Nationality', value: 'Vietnam' },
  { label: 'Language', value: 'English, Vietnamese' },
  { label: 'Location', value: 'Ho Chi Minh City, Vietnam' },
  {
    label: 'Freelance',
    value: <Link href="/contact">Contact me</Link>,
    className: 'text-green-500',
  },
]

const AboutMe: React.FC = () => {
  return (
    <>
      <Headline>About me</Headline>
      <div className="flex flex-col md:flex-row">
        <div className="flex-initial w-full lg:w-1/2">
          <div className="pr-0 md:pr-4">
            <img src="/images/about-me.jpg" alt="About me picture" />
          </div>
        </div>
        <div className="flex-initial w-full lg:w-1/2">
          <div className="pl-0 md:pl-4">
            <div className="text-3xl md:text-4xl mt-5 md:mt-0">
              I am <span className="text-blue-1000">Luan Phan</span>
            </div>
            <div className="text-lg text-gray-500 mt-1">
              I'm a software engineer with 4+ years of practice, most experienced in web development.
            </div>

            <div className="text-lg text-gray-500 mt-4">
              {aboutMeInfo.map((item) => (
                <div key={item.label} className="flex my-1">
                  <div className="w-32 font-bold">{item.label}</div>
                  <div className="w-2/2">
                    <span className="font-bold mr-2">:</span> <span className={item.className || ''}>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
