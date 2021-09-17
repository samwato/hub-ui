import React from 'react'
import {Label} from '../ui'

export const CheckboxInput = ({
  id,
  name,
  label,
  value,
  handleChange,
  size,
  checked = false,
  indeterminate = false,
  required = false,
  disabled = false
}) => {
  
  const checkboxRef = React.useRef()
  
  React.useEffect(() => {
    if (value === 1 || value === 'Checked' || value) {
      checkboxRef.current.checked = true;
      checkboxRef.current.indeterminate = false;
    } else if (value === 0 || value === 'Empty' || !value) {
      checkboxRef.current.checked = false;
      checkboxRef.current.indeterminate = false;
    } else if (value === 2 || value === 'Indeterminate') {
      checkboxRef.current.checked = false;
      checkboxRef.current.indeterminate = true;
    }
  }, [value])
  
  let inputClasses = ''
  let containerClasses = 'flex flex-col mb-5'
  if (size === 'table') {
    inputClasses = 'h-auto p-1 text-xs rounded-none border-white'
    containerClasses = 'flex flex-col items-center'
  }
    
  return (
    <div className={containerClasses}>
      <input
        ref={checkboxRef}
        className={inputClasses}
        type="checkbox"
        id={id}
        name={name}
        onChange={handleChange}
        disabled={disabled}
      />
      {label ? <Label id={id} text={label} /> : null }
    </div>
  )
}
