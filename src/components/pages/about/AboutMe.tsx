import React from 'react'
import Headline from '../../commons/Headline'

const aboutMeInfo = [
  { label: 'Full Name', value: 'David Chester' },
  { label: 'Age', value: '27' },
  { label: 'Nationality', value: 'Vietnam' },
  { label: 'Language', value: 'English, Vietnamese' },
  { label: 'Location', value: 'Ho Chi Minh City' },
  { label: 'Freelance', value: 'Available' },
]

const AboutMe: React.FC = () => {
  return (
    <>
      <Headline>About me</Headline>
      <div className="flex">
        <div className="flex-initial w-1/2">
          <div className="pr-4">
            <img src="https://tf-react-chester.now.sh/images/about-image.jpg" />
          </div>
        </div>
        <div className="flex-initial w-1/2">
          <div className="pl-4">
            <div className="text-4xl">
              I am <span className="text-blue-1000">A Man</span>
            </div>
            <div className="text-lg text-gray-500 mt-1">
              I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more
              & more interactive with web animations.
            </div>

            <div className="text-lg text-gray-500 mt-4">
              {aboutMeInfo.map(item => (
                <div key={item.label} className="flex my-1">
                  <div className="w-32 font-bold">{item.label}</div>
                  <div className="w-2/2">
                    <span className="font-bold mr-2">:</span> {item.value}
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
