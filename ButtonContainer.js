import React from 'react'

export const ButtonContainer = ({ children }) => {
  if (!children) {
    throw Error('Button container needs at least 1 child element')
  }
  return (
    <div className={`flex ${children.length > 1 ? 'justify-between' : 'justify-end'} flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row`}>
      {children}
    </div>
  )
}
