import React from 'react'

export const Table = ({ children, layout = 'auto' }) => { 
  let tableLayoutClass = 'table-auto'
  if (layout === 'fixed') tableLayoutClass = 'table-fixed'
  return (
    <table className={`
      ${tableLayoutClass}
      w-full
      text-sm
      border-seperate
    `}>{children}</table>
  )
}
