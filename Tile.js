import React from 'react'

export const Tile = ({ children }) => (
  <section className="
    mx-auto
    flex
    flex-col
    max-w-lg w-auto
    p-10
    rounded-lg
    shadow-lg
    bg-white
    dark:bg-gray-700
  ">
    {children}
  </section>
)
