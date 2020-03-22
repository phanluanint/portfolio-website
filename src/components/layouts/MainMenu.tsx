import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
  { url: '/', label: 'Home' },
  { url: '/about', label: 'About' },
  { url: '/resume', label: 'Resume' },
  // { url: '/portfolio', label: 'Portfolio' },
  { url: '/contact', label: 'Contact' },
]

const MainMenu = () => {
  const router = useRouter()

  return (
    <div className="flex-1 flex items-center justify-center">
      <ul className="left-menu m-0 p-0 w-full px-2">
        {links.map(menu => (
          <li key={menu.url}>
            <Link href={menu.url} passHref>
              <a
                className={`block uppercase py-2 text-center ${
                  menu.url === router.pathname ? 'active bg-blue-1000 text-white' : 'hover:text-blue-1000 '
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
