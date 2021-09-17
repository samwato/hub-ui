import React from 'react'

export const Header = ({ children }) => (
  <header
    className="
      w-full
      py-2
      min-h-10
      flex
      justify-between
      items-center
      ">
    {children}
  </header>
)
