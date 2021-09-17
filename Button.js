import React from 'react'
import { Icons } from '../ui'

export const Button = ({ text, icon, handler, variant = 'highlight', size = 'md', disabled, type = 'button', fullwidth = false }) => {
  
  const variantOptions = {
    success: {
      border: 'border',
      borderColor: 'border-transparent',
      borderRadius: 'rounded-full',
      bgColor: 'bg-green-600',
      bgHoverColor: 'hover:bg-green-500',
      textColor: 'text-white',
      darkTextColor: 'dark:text-white',
      iconColor: 'text-white',
      darkIconColor: 'dark:text-white',
      hoverShadow: 'hover:shadow',
    },
    dark: {
      border: 'border',
      borderColor: 'border-transparent',
      borderRadius: 'rounded-full',
      bgColor: 'bg-gray-900',
      bgHoverColor: 'hover:bg-gray-800',
      textColor: 'text-white',
      darkTextColor: 'dark:text-white',
      iconColor: 'text-white',
      darkIconColor: 'dark:text-white',
      hoverShadow: 'hover:shadow',
    },
    delete: {
      border: 'border',
      borderColor: 'border-transparent',
      borderRadius: 'rounded-full',
      bgColor: 'bg-red-600',
      bgHoverColor: 'hover:bg-red-500',
      textColor: 'text-white',
      darkTextColor: 'dark:text-white',
      iconColor: 'text-white',
      darkIconColor: 'dark:text-white',
      hoverShadow: 'hover:shadow',
    },
    highlight: {
      border: 'border',
      borderColor: 'border-transparent',
      borderRadius: 'rounded-full',
      bgColor: 'bg-blue-600',
      bgHoverColor: 'hover:bg-blue-500',
      textColor: 'text-white',
      darkTextColor: 'dark:text-white',
      iconColor: 'text-white',
      darkIconColor: 'dark:text-white',
      hoverShadow: 'hover:shadow',
    },
    warning: {
      border: 'border',
      borderColor: 'border-transparent',
      borderRadius: 'rounded-full',
      bgColor: 'bg-yellow-500',
      bgHoverColor: 'hover:bg-yellow-400',
      textColor: 'text-white',
      darkTextColor: 'dark:text-white',
      iconColor: 'text-white',
      darkIconColor: 'dark:text-white',
      hoverShadow: 'hover:shadow',
    },
    light: {
      border: 'border',
      borderColor: 'border-gray-300',
      borderRadius: 'rounded-full',
      bgColor: 'bg-white',
      bgHoverColor: 'hover:bg-white',
      textColor: 'text-black',
      darkTextColor: 'dark:text-black',
      iconColor: 'text-gray-500',
      darkIconColor: 'dark:text-gray-500',
      hoverShadow: 'hover:shadow',
    },
    outline: {
      border: 'border',
      borderColor: 'border-gray-300',
      borderRadius: 'rounded-full',
      bgColor: 'bg-transparent',
      bgHoverColor: 'hover:transparent',
      textColor: 'text-black',
      darkTextColor: 'dark:text-white',
      iconColor: 'text-gray-500',
      darkIconColor: 'dark:text-gray-300',
      hoverShadow: 'hover:shadow',
    },
    transparent: {
      border: 'border',
      borderColor: 'border-transparent',
      borderRadius: 'rounded-full',
      bgColor: 'bg-transparent',
      bgHoverColor: 'hover:bg-transparent',
      textColor: 'text-black',
      darkTextColor: 'dark:text-white',
      iconColor: 'text-gray-500',
      darkIconColor: 'dark:text-gray-300',
      hoverShadow: 'hover:shadow-none',
    },
    transparentDelete: {
      border: 'border',
      borderColor: 'border-transparent',
      borderRadius: 'rounded-full',
      bgColor: 'bg-transparent',
      bgHoverColor: 'hover:bg-transparent',
      textColor: 'text-black',
      darkTextColor: 'dark:text-white',
      iconColor: 'text-red-500',
      darkIconColor: 'dark:text-red-300',
      hoverShadow: 'hover:shadow-none',
    },
    transparentSuccess: {
      border: 'border',
      borderColor: 'border-transparent',
      borderRadius: 'rounded-full',
      bgColor: 'bg-transparent',
      bgHoverColor: 'hover:bg-transparent',
      textColor: 'text-black',
      darkTextColor: 'dark:text-white',
      iconColor: 'text-green-500',
      darkIconColor: 'dark:text-green-300',
      hoverShadow: 'hover:shadow-none',
    },
    transparentHighlight: {
      border: 'border',
      borderColor: 'border-transparent',
      borderRadius: 'rounded-full',
      bgColor: 'bg-transparent',
      bgHoverColor: 'hover:bg-transparent',
      textColor: 'text-black',
      darkTextColor: 'dark:text-white',
      iconColor: 'text-blue-500',
      darkIconColor: 'dark:text-blue-300',
      hoverShadow: 'hover:shadow-none',
    }
  }
  
  const sizeOptions = {
    md: {
      height: 'h-10',
      textSize: 'text-sm',
      width: `${!text ? 'w-10' : 'w-auto'}`,
      lgWidth: `${!text ? 'lg:w-10' : 'lg:w-auto'}`,
      paddingX: `${!text ? 'px-0' : 'px-5'}`,
    },
    sm: {
      height: 'h-8',
      textSize: 'text-sm',
      width: `${!text ? 'w-8' : 'w-auto'}`,
      lgWidth: `${!text ? 'lg:w-8' : 'lg:w-auto'}`,
      paddingX: `${!text ? 'px-0' : 'px-5'}`,
    },
    xs: {
      height: 'h-6',
      textSize: 'text-xs',
      width: `${!text ? 'w-6' : 'w-auto'}`,
      lgWidth: `${!text ? 'lg:w-6' : 'lg:w-auto'}`,
      paddingX: `${!text ? 'px-0' : 'px-3'}`,
    }
  }

    
  return (
    <button
      className={`
        ${sizeOptions[size].height}
        ${sizeOptions[size].width}
        ${fullwidth ? 'lg:w-full': sizeOptions[size].lgWidth}
        ${sizeOptions[size].textSize}
        ${sizeOptions[size].paddingX}
        ${variantOptions[variant].bgColor}
        ${variantOptions[variant].textColor}
        ${variantOptions[variant].darkTextColor}
        ${variantOptions[variant].border}
        ${variantOptions[variant].borderColor}
        ${variantOptions[variant].borderRadius}
        focus:outline-none
        group
        font-medium
        box-content
        transition
        ${variantOptions[variant].hoverShadow}
        ${variantOptions[variant].bgHoverColor}
        disabled:opacity-50
      `}
      type={type}
      onClick={handler}
      disabled={disabled}
    >
      <div
        className="
          flex
          items-center
        ">
        <div className="
            flex
            items-center
            justify-center
            w-full
          ">
          {icon && <div className={`
            ${text ? 'mr-1' : 'mr-0'}
            ${variantOptions[variant].iconColor}
            ${variantOptions[variant].darkIconColor}
            ${icon === 'loader' || icon === 'loader-sm' || icon === 'loader-xs' ? 'animate-spin' : 'animate-none' }
          `}>{Icons[icon]}</div> }
          {text}
        </div>
      </div>
    </button>
  )
}
