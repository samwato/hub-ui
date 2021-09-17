import React from 'react'
import { Icons } from '../ui'

export const MenuItem = ({ icon, title, handler }) => {
  return (
    <button
      className="group w-full focus:outline-none"
      onClick={handler}
    >
      <div
        className="
          h-12
          flex
          items-center
          p-5
          rounded-md
          group-hover:bg-opacity-5
          group-hover:bg-black
          group-hover:bg-opacity-10
          dark:group-hover:bg-white
          transition
        "
      >
        <div className="flex items-center w-full">
          <div className="mr-4 text-black dark:text-white">{Icons[icon]}</div>
          <h4 className="text-black dark:text-white">{title}</h4>
        </div>
      </div>
    </button>
  )
}
