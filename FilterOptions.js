import React from 'react'

export const FilterOptions = ({ active, children }) => {
  
  if (!active) return <div className="my-3"></div>

  return (
    <div className="
      flex
      items-center
      flex-col
      lg:flex-row
      justify-start
      flex-nowrap
      w-full
      my-3
    ">
      {children}
    </div>
  )
}
