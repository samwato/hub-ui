import React from 'react'
import {NotificationItem} from '../ui'

export const NotificationList = ({ children }) => {
  return (
    <div className="absolute right-0 bg-white flex flex-col shadow-lg w-80">
      { children.length === 0 ? 
        <NotificationItem
          variant="success"
          message="Nothing to do"
        /> : null }
      {children}
    </div>
  )
}
