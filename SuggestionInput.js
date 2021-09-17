import React from 'react'
import {useClickAwayEffect} from './customHooks'
import {Icons, Label, ValidationLabel} from '../ui'
import {useQueryDataBySearchForSuggestion} from '../lib/customQueries'

export const SuggestionInput = ({ id, name, label, value, handleChange, size, searchQueryKey, required = false, disabled = false }) => {  

  // React Query, disabled by default
  const {
    isLoading,
    data,
    refetch,
  } = useQueryDataBySearchForSuggestion(searchQueryKey)

  const suggestionItems = data ? data : []
  
  // State
  const [showSuggestions, setShowSuggestions] = React.useState(false)
  
  // Handlers
  const handleFocus = (e) => {
    setShowSuggestions(true)
    refetch()
  }
  const handleSearchChange = (searchValue) => {
    handleChange({ target: { name, value: searchValue } })
  }
  
  const containerRef = React.useRef(null)
  
  // useEffect
  React.useEffect(() => {
    setShowSuggestions(false)
  }, [value])
  
  // useRef click away
  useClickAwayEffect(containerRef, () => {
    setShowSuggestions(false)
  })
  
  let inputClasses = 'standard-input'
  let containerClasses = 'flex flex-col mb-5'
  // if (size === 'table') {
  //   inputClasses = 'standard-input h-auto p-1 text-xs rounded-none border-white'
  //   containerClasses = 'flex flex-col'
  // }  
  // React Return
  return (
    <div className={containerClasses} ref={containerRef}>
      {label ? <Label id={id} text={label} /> : null }
      <div className="items-center flex relative">
        <input
          className={inputClasses}
          type="text"
          id={id}
          name={name}
          value={ value ? value : '' }
          onChange={handleChange}
          onFocus={handleFocus}
          required={required}
          disabled={disabled}
        />
        {isLoading ? 
          <div className="h-full absolute right-2 flex items-center">
            <div className="animate-spin text-gray-500">{Icons['loader-xs']}</div>
          </div>
        : null }
      </div>
      <div className="w-full relative">
        {showSuggestions ?
          <div className="pt-2 pb-1 px-1 bg-white border border-gray-200 rounded-md absolute left-0 right-0 max-h-40 overflow-y-auto z-20">
            <ul>
              {suggestionItems.map((item, i) => (
                  <li
                    key={i}
                    className="w-full hover:bg-gray-100 text-sm py-1 px-2 cursor-pointer"
                    onClick={() => handleSearchChange(item)}>
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        : null }
      </div>
      
      { required && !value ? <ValidationLabel id={id} text="* required" /> : null }
    </div>
  )
}
