import React from 'react'
import {Button} from '../ui'

export const Modal = ({ open, onClose, children }) => {
  if (!open) return null
  
  return (
    <div className="
      fixed
      inset-0
      bg-gray-900
      bg-opacity-70
      z-50
      p-3
      overflow-auto
    ">
      <div className="w-full flex justify-end p-2">
        <Button
          size="sm"
          variant="light"
          icon="x-sm"
          handler={onClose}
        />
      </div>
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}
