import React from 'react'
import {Label} from '../ui'

export const RadioInput = ({ id, name, label, value, handleChange, size, checked, required = false, disabled = false }) => {  
  
  let inputClasses = 'standard-input'
  let containerClasses = 'flex flex-col mb-5'
  if (size === 'table') {
    inputClasses = 'standard-input h-auto p-1 text-xs rounded-none border-white'
    containerClasses = 'flex flex-col'
  }
    
  return (
    <div className={containerClasses}>
      <input
        className={inputClasses}
        type="radio"
        id={id}
        name={name}
        value={ value ? value : '' }
        onChange={handleChange}
        disabled={disabled}
        checked={checked}
      />
      {label ? <Label id={id} text={label} /> : null }
    </div>
  )
}
