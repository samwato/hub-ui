import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

export const TabsLink = ({ to, text, activeOnlyWhenExact }) => {
  
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact ? activeOnlyWhenExact : false
  })

  return (
    <Link className={`${match ? 'text-blue-700' : 'text-black'}`} to={to}>
      <div className={`
        flex
        items-center
        py-3
        px-5
        border-b
        ${match ? 'border-blue-700' : 'border-gray-200'}
        ${match ? 'hover:border-blue-700' : 'hover:border-gray-300'}
        -mb-px
      `}>
        <div className="flex items-center">
          <h4 className="text-sm font-medium">{text}</h4>
        </div>
      </div>
    </Link>
  )
}
