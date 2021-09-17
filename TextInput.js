import React from 'react'
import {Label, ValidationLabel} from '../ui'

export const TextInput = ({ id, name, label, value, handleChange, size, required = false, disabled = false }) => {  
  
  let inputClasses = 'standard-input'
  let containerClasses = 'flex flex-col mb-5'
  if (size === 'table') {
    inputClasses = 'standard-input h-auto p-1 text-xs rounded-none border-white dark:border-gray-700'
    containerClasses = 'flex flex-col'
  }
    
  return (
    <div className={containerClasses}>
      {label ? <Label id={id} text={label} /> : null }
      <input
        className={inputClasses}
        type="text"
        id={id}
        name={name}
        value={ value ? value : '' }
        onChange={handleChange}
        required={required}
        disabled={disabled}
      />
    { required && !value ? <ValidationLabel id={id} text="* required" /> : null }
    </div>
  )
}
