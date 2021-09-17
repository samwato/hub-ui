import React from 'react'

export const ValidationLabel = ({ id, text }) => {
  if (!text) return null
  return (
    <label
      className="text-xs mt-2 text-red-500"
      htmlFor={id ? id : null}>
      {text}
    </label>
  )
}
