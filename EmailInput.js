import React from 'react'
import {Label} from '../ui'

export const EmailInput = ({ id, name, label, value, handleChange, disabled }) => {
  return (
    <div className="flex flex-col w-full">
      <Label id={id} text={label}/>
      <input
        className="standard-input"
        type="email"
        id={id}
        name={name}
        value={ value ? value : '' }
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  )
}
