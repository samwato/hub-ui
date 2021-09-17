import React from 'react'
import {Label, Button, ButtonContainer} from '../ui'

export const FileInput = ({ id, label, name, accept, handler, disabled = false }) => {
  
  const fileInputField = React.useRef(null)
  
  const addImageToList = () => {
    const file = fileInputField.current.files[0]
    if (file) {
      handler(file)
    }
  }
  
  return (
    <div className="flex flex-col mb-5">
      <Label id={id} text={label} />
      <div className="flex flex-row w-full border border-gray-200 dark:border-gray-700 p-2 rounded-lg mb-3 text-black dark:text-white">
        <input
          ref={fileInputField}
          type="file"
          id={id}
          name={name}
          accept={accept}
          disabled={disabled}
        />
      </div>
      <ButtonContainer>
        <Button
          size="sm"
          variant="light"
          text="Add"
          handler={addImageToList}
        />
      </ButtonContainer>
    </div>
  )
}
