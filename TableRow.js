import React from 'react'

export const TableRow = ({ children, variant = 'normal' }) => {
  
  const variantOptions = {
    normal: {
      bg: 'bg-white',
      bgDark: 'dark:bg-gray-800',
      bgHover: 'hover:bg-gray-50',
      bgDarkHover: 'dark:hover:bg-gray-700'
    },
    highlight: {
      bg: 'bg-blue-50',
      bgDark: 'dark:bg-gray-700',
      bgHover: 'hover:bg-blue-50',
      bgDarkHover: 'dark:hover:bg-gray-700'
    },
  }
  
  return (
    <tr className={`
      h-10
      border-b
      border-gray-200
      dark:border-gray-600
      ${variantOptions[variant].bg}
      ${variantOptions[variant].bgDark}
      ${variantOptions[variant].bgHover}
      ${variantOptions[variant].bgDarkHover}
    `}>
      {children}
    </tr>
  )
}
