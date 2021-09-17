import React from 'react'

export const FieldGroup = ({ children }) => {
  return (
    <div className="grid lg:grid-flow-col lg:justify-items-stretch lg:gap-4">
      {children}
    </div>
  )
}
