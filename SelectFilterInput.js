import React from 'react'
import { Badge, Label } from '../ui'

export const SelectFilterInput = ({ name, label, value, handler, options }) => {
  return (
    <div className="flex flex-grow flex-col my-2 mx-0 lg:mx-3 w-full">
      <div className="w-full flex justify-between items-center content-center  h-7 my-1">
        <Label text={label}/>
        { value ?
          <Badge
            text="Clear"
            handler={() => handler({ name, value: '' })}
          /> : null }
      </div>
      <div className="flex items-center">
        <select
          className="standard-input rounded-full"
          name={name}
          value={ value ? value : '' }
          onChange={(e) => handler({ name, value: e.target.value })}
        >
          {options.map(item => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
