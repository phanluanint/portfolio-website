import React from 'react'
import Link from 'next/link'

const links = [
  { url: '/', label: 'Home' },
  { url: '/about', label: 'About' },
  { url: '/resume', label: 'Resume' },
  { url: '/portfolio', label: 'Portfolio' },
  { url: '/contact', label: 'Contact' },
]

const MainMenu = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <ul className="left-menu m-0 p-0 w-full px-2">
        {links.map(menu => (
          <li>
            <Link href="/">
              <a
                className={`block uppercase font-semibold py-2 ${
                  menu.label === 'Home' ? 'active bg-blue-1000 text-white' : 'hover:text-blue-1000 '
                }`}
              >
                {menu.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MainMenu
