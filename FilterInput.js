import React from 'react'
import { Icons, Badge, Label } from '../ui'

export const FilterInput = ({ name, label, value, handler }) => {
  return (
    <div className="flex flex-grow flex-col my-2 mx-0 lg:mx-3 w-full">
      <div className="w-full flex justify-between items-end content-center h-7 my-1">
        <Label text={label}/>
        { value ?
          <Badge
            text="Clear"
            handler={() => handler({ name, value: '' })}
          /> : null }
      </div>
      <div className="flex items-center">
        <div className="-mr-10 ml-4 text-gray-300 z-10">{Icons['search']}</div>
        <input
          className="standard-input pl-12 rounded-full"
          type="text"
          name={name}
          value={value ? value : ''}
          onChange={(e) => handler({ name, value: e.target.value })}
        />
      </div>
    </div>
  )
}
