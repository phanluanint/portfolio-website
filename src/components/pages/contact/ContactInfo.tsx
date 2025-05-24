import React from 'react'

const infos = [
  {
    icon: 'icon-envelope',
    link: 'mailto:me@luanphan.net',
    text: 'me@luanphan.net',
    label: 'Email',
  },
  {
    icon: 'icon-linkedin',
    link: 'https://www.linkedin.com/in/phanluanint',
    text: 'phanluanint',
    label: 'LinkedIn',
  },
]
const ContactInfo: React.FC = () => {
  return (
    <>
      {infos.map((info) => (
        <div className="bg-gray-900 my-4 flex p-4 sm:p-8 text-gray-600 items-center" key={info.text}>
          <div className="border border-gray-800 p-4 mr-6">
            <span className={`text-lg sm:text-4xl ${info.icon}`} />
          </div>
          <div className="text-sm sm:text-lg">
            <div className="text-white">{info.label}</div>
            <div>
              <a href={info.link} className="hover:text-blue-1000 transition duration-500 ease-out" target='_blank' rel="noreferrer">
                {info.text}
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ContactInfo
