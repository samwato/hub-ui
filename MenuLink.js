import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { Icons } from '../ui'


export const MenuLink = ({ icon, title, to, activeOnlyWhenExact, handler }) => {
  
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact ? activeOnlyWhenExact : true
  })

  return (
    <Link
      to={to}
      onClick={handler}
      className="block group"
    >
      <div
        className={`
          h-12
          flex
          items-center
          p-5
          rounded-md
          transition
          ${match ? 'bg-blue-600': 'bg-transparent'}
          ${match ? 'group-hover:bg-blue-600': 'group-hover:bg-opacity-5 group-hover:bg-black group-hover:bg-opacity-10 dark:group-hover:bg-white'}
          ${match ? 'shadow-md': 'shadow-none'}
        `}>
        <div
          className="
            flex
            items-center
            w-full
          "
        >
          <div className={`
              mr-4
              ${match ? 'text-white' : 'text-black dark:text-white'}
            `
          }>
            {Icons[icon]}
          </div>
          <h4 className={`${match ? 'text-white' : 'text-black dark:text-white' }`}>{title}</h4>
        </div>
      </div>
    </Link>
  )
}
