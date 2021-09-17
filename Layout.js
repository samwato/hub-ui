import React from 'react'

export const Layout = ({ children }) => {
  return (
    <div className="
      min-w-0
      w-full
      flex-auto
      lg:static
      lg:max-h-full
      lg:overflow-visible
      bg-gray-50
      dark:bg-gray-800
      rounded-3xl
      shadow-lg
    ">
      {children}
    </div>
  )
}
