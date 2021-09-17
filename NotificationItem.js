import React from 'react'
import { Icons } from '../ui'

export const NotificationItem = ({ id, referenceDeviceId, message, link, handler, variant = 'info' }) => {
  
  const variantOptions = {
    info: {
      bg: 'bg-blue-50',
      hoverBg: 'hover:bg-blue-100',
      icon: 'exclamation-circle-xs',
    },
    database: {
      bg: 'bg-yellow-50',
      hoverBg: 'hover:bg-yellow-100',
      icon: 'database-xs',
    },
    success: {
      bg: 'bg-green-50',
      hoverBg: 'hover:bg-green-100',
      icon: 'check-circle-xs',
    },
  }
  
  return (
    <div
      className={`${variantOptions[variant].bg} ${variantOptions[variant].hoverBg} border-b border-gray-200 w-full`}
      onClick={handler}
    >
      <div
        key={id}
        className="p-3 text-xs flex flex-row"
      >
        <div className="mr-2">{Icons[variantOptions[variant].icon]}</div>
        <p>{message}</p>
      </div>
    </div>
  )
}
