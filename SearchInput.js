import React from 'react'
import { Label } from '../ui'

export const SearchInput = ({ id, name, label, size, placeholder, value, handler, required = false, disabled = false }) => {
  return (
    <div className="flex flex-col mb-5">
      {label ? <Label id={id} text={label} /> : null }
      <input
        className="standard-input"
        type="text"
        name={name}
        placeholder={placeholder}
        value={value ? value : ''}
        required={required}
        disabled={disabled}
        onChange={(e) => handler({ name, value: e.target.value })}
      />
    </div>
  )
}
