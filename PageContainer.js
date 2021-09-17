import React from 'react'

export const PageContainer = ({ children }) => {
  return (
    <div className="flex flex-col w-full px-3 pb-3 min-h-screen w-full">
      {children}
    </div>
  )
}
