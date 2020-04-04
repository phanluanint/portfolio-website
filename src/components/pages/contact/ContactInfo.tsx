import React from 'react'

const infos = [
  {
    icon: 'icon-github',
    link: 'tel:+84901264846',
    text: '+84 901 26 48 46',
    label: 'Phone',
  },
  {
    icon: 'icon-github',
    link: 'mailto:phanluanint@gmail.com',
    text: 'phanluanint@gmail.com',
    label: 'Email',
  },
  {
    icon: 'icon-github',
    link: 'https://www.linkedin.com/in/phanluanint/',
    text: 'phanluanint',
    label: 'LinkedIn',
  },
]
const ContactInfo: React.FC = () => {
  return (
    <>
      {infos.map(info => (
        <div className="bg-gray-900 my-4 flex p-8 text-gray-600 items-center" key={info.text}>
          <div className="border border-gray-800 p-4 mr-6">
            <span className={`text-4xl ${info.icon}`} />
          </div>
          <div className="text-lg">
            <div className="text-white">{info.label}</div>
            <div>
              <a href={info.link} className="hover:text-blue-1000 transition duration-500 ease-out">
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
