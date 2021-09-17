import React from 'react'

export const Label = ({ id, text }) => (
  <label
    className="text-xs mb-2 text-black dark:text-white"
    htmlFor={id ? id : null}>
    {text}
  </label>
)
