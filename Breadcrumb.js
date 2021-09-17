import React from 'react'
import { Link } from 'react-router-dom'

export const Breadcrumb = ({ crumbs }) => {
  if (!Array.isArray(crumbs)) return null
  return (
    <div className="font-medium">
      {crumbs.map((crumb, i) => {
        if (crumb.type === 'link') {
          return <Link key={i} className="text-blue-700" to={crumb.link}>{crumb.title}</Link>
        } else if (crumb.type === 'text') {
          return <span key={i} className="text-gray-600">{crumb.title}</span>
        } else {
          return <span key={i} className="mx-2 text-gray-300">{crumb.title}</span>
        }
      })}
    </div>
  )
}
