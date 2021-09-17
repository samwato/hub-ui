import React from 'react'

export const NotificationCount = ({ count }) => {
  return (
    <div className=" cursor-pointer text-xs bg-yellow-500 font-bold rounded-full w-4 h-4 text-white flex items-center justify-center">
      <span>
        {count}
      </span>
    </div>
  )
}
