import React from 'react'
import { Button } from '../ui'
import { ViewportContext } from '../context/ViewportContext'

export const Sidebar = ({ children, showNavOverride }) => {
  const { toggleNav } = React.useContext(ViewportContext)
  return (
    <div className={`
      fixed
      lg:static
      ${!showNavOverride && 'hidden'}
      lg:block
      z-40
      inset-0
      flex-none
      min-h-screen
      bg-gray-50
      shadow-xl
      lg:bg-transparent
      lg:shadow-none
      dark:bg-gray-900
      w-56
      xl:w-56
    `}>
      <div className="
        px-4
        h-full
        overflow-y-auto
        sticky
      ">
        <div className="absolute -ml-2 p-2 block lg:hidden">
          <Button
            variant="transparent"
            icon="x"
            handler={() => toggleNav(false)}
          />
        </div>
        {children}
      </div>
    </div>
  )
}
