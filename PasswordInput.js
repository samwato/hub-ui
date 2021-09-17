import React from 'react'
import {Label} from '../ui'

export const PasswordInput = ({ id, name, label, value, handleChange, disabled }) => {
  return (
    <div className="flex flex-col mb-5">
      <Label id={id} text={label} />
      <input
        autoComplete="current-password"
        className="standard-input"
        type="password"
        id={id}
        name={name}
        value={ value ? value : '' }
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  )
}
