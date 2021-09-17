import React from 'react'

export const Loader = () => {
  return (
    <div className="p-7 text-blue-700 ">
      <svg width="50px" height="50px" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" aria-label="audio-loading">
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)">
            <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="currentColor" strokeWidth="2">
              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform>
            </path>
            <circle fill="currentColor" cx="36" cy="18" r="1">
              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform>
            </circle>
          </g>
        </g>
      </svg>
    </div>
  )
}
