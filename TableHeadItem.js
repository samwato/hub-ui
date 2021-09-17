import React from 'react'

export const TableHeadItem = ({ children, fixedWidthLength, size = 'md' }) => {
  
  const sizeOptions = {
    md: {
      height: 'h-10',
      width: 'w-auto'
    },
    sm: {
      height: 'h-8',
      width: 'w-auto'
    },
    xs: {
      height: 'h-6',
      width: 'w-auto'
    },
  }

  return (
    <th className={`
      ${sizeOptions[size].height}
      ${fixedWidthLength ? `w-1/${fixedWidthLength}` : sizeOptions[size].width}
      font-medium
      px-4
      whitespace-normal
    `}>{children}</th>
  )
}
