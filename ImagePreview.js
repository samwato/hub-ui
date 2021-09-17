import React from 'react'
import {Button} from '../ui'

export const ImagePreview = ({ src, id, handler, alt = "" }) => {
  return (
    <div className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg relative mb-5">
      { handler ?
        <div className="absolute right-1 top-1">
          <Button
            icon="x-xs"
            size="xs"
            variant="delete"
            handler={() => handler(id)}
          />
        </div> : null }
      <img
        src={src}
        alt={alt}
      />
    </div>
  )
}
