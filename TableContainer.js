import React from 'react'

export const TableContainer = ({ children }) => (
  <div
    className="
      overflow-x-auto
      border-t
      border-l
      border-r
      border-gray-200
      dark:border-gray-600
      text-black
      dark:text-white
      rounded-md
      shadow
    ">{children}</div>
)
