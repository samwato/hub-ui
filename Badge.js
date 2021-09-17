import React from 'react'

export const Badge = ({ text, handler, variant = 'info' }) => {
  
  const variantOptions = {
    info: {
      textColor: 'text-blue-700',
      darkTextColor: 'dark:text-blue-50',
      bgColor: 'bg-blue-50',
      darkBgColor: 'dark:bg-blue-700',
      borderColor: 'border-blue-100',
      darkBorderColor: 'dark:border-blue-500',
    },
    error: {
      textColor: 'text-red-700',
      darkTextColor: 'dark:text-red-50',
      bgColor: 'bg-red-50',
      darkBgColor: 'dark:bg-red-700',
      borderColor: 'border-red-100',
      darkBorderColor: 'dark:border-red-500',
    },
  }
  
  return (
    <button
      onClick={handler}
      className={`
        ${handler ? 'cursor-pointer' : 'cursor-auto'}
        ${variantOptions[variant].textColor}
        ${variantOptions[variant].darkTextColor}
        ${variantOptions[variant].bgColor}
        ${variantOptions[variant].darkBgColor}
        ${variantOptions[variant].borderColor}
        ${variantOptions[variant].darkBorderColor}
        border
        text-xs
        px-3
        py-1
        mb-1
        rounded-full
        focus:outline-none
        hover:shadow-sm
        `}
      >{text}</button>
  )
}
