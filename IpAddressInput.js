import React from 'react'
import {Label, ValidationLabel} from '../ui'

export const IpAddressInput = ({ id, name, size, label, value, handleChange, required = false, disabled = false }) => {  
  
  // Middle basic mods on the value
  const handleIpAddressChange = (e) => {
    const { name, value } = e.target
    const findFaultRegex = new RegExp('[0-9]{4,}|[^0-9,.]|[,]|[.]{2,}|^[.]|([^.]*[.]){4,}', 'g')
    // if regex did not find any pattern fault, then change value
    if (!findFaultRegex.test(value) || !value) {
      handleChange({ target: { name, value }})
    }
  }
  
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
        minLength="7"
        maxLength="15"
        pattern="/^([0-9][0-9][0-9]\.){3}$/"
        onChange={handleIpAddressChange}
        required={required}
        disabled={disabled}
      />
    { required && !value ? <ValidationLabel id={id} text="* required" /> : null }
    </div>
  )
}
