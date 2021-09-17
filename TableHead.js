import React from 'react'

export const TableHead = ({ children }) => (
  <thead className="
    text-left
    text-xs
    text-gray-500
    dark:text-gray-300
    uppercase
    bg-gray-100
    dark:bg-gray-700
    border-b
    border-gray-200
    dark:border-gray-600
  ">{children}</thead>
)
