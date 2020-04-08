import React from 'react'

interface TimelineProps {
  period: string
  title: string
  subTitle: string
  content: string
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
              <div className="text-md md:text-lg text-gray-500">2018 - Present</div>
              <div className="w-8 h-1px bg-gray-800 ml-auto mr-5" />
            </div>
          </div>

          <div className="w-full md:w-9/12 ml-4">
            <div className="text-blue-1000 text-2xl font-semibold">Frontend Web Developer</div>
            <div className="text-white text-lg mt-2 mb-3">ACME Company</div>
            <div className="text-gray-500 text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur
              accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem
              nostrum quasi. Molestiae, vel porro.
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
