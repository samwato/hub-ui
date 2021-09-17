import React from 'react'
import { Icons } from '../ui'

export const FilterButton = ({ active, count, handler, text }) => {
  return (
    <button
      type="button"
      className={`
        h-10
        group
        text-sm
        focus:outline-none
        font-medium
        border
        border-gray-300
        rounded-full
        px-5
        ${active ? 'bg-gray-200' : 'bg-transparent'}
        ${active ? 'dark:bg-gray-700' : 'dark:bg-transparent'}
        hover:shadow
        transition
      `}
      onClick={handler}
    >
    <div
      className="
        flex
        items-center
      ">
      <div className="
          flex
          items-center
          justify-center
          w-full
          text-black
          dark:text-white
        ">
          { count > 0 ?
            <div className="w-5 h-5 rounded-full bg-green-500 mr-2">
              <span className="text-white text-sm">{count}</span>
            </div>
          :
            <div className="mr-2">
              {Icons['adjustments']}
            </div>
          }
          {text}
        </div>
      </div>
    </button>
  )
}
