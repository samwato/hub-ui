import React from 'react'

export const TableData = ({ children, colSpan = 'auto', handler, bgColor = 'transparent', size = 'sm' }) => {
  let tdStyles = `h-full py-1 px-4 bg-${bgColor} text-${size} truncate`
  if (size === 'xs') tdStyles = `h-full py-1 px-1 bg-${bgColor} text-${size} leading-none`
  
  return (
    <td
      colSpan={colSpan}
      className={tdStyles}
      onClick={handler}>
      {children}
    </td>
  )
}
