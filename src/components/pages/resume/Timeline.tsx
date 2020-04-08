import React from 'react'

interface TimelineProps {
  period: string
  title: string
  subTitle: string
  content: string | React.ReactElement
}

interface Props {
  timelines: TimelineProps[]
}

const Timeline: React.FC<Props> = ({ timelines }) => {
  return (
    <div className="border-l-3 border-gray-800">
      {timelines.map(timeline => (
        <div className="flex-col md:flex-row flex mb-8" key={timeline.title}>
          <div className="w-full md:w-3/12">
            <div className="flex items-center pt-1">
              <div className="mr-2 md:mr-5 w-4 h-4 rounded-full border-3 border-gray-800 block -ml-9px bg-gray-1100" />
              <div className="text-md md:text-lg text-gray-500">{timeline.period}</div>
              <div className="w-8 h-1px bg-gray-800 ml-auto mr-5" />
            </div>
          </div>

          <div className="w-full md:w-9/12 ml-4">
            <div className="text-blue-1000 text-2xl font-semibold">{timeline.title}</div>
            <div className="text-white text-lg mt-2 mb-3">{timeline.subTitle}</div>
            <div className="text-gray-500 text-lg text-justify">{timeline.content}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
