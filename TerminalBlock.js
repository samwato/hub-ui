import React from 'react'

export const TerminalBlock = ({ children }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 rounded-lg h-100 text-black dark:text-white p-5 border border-gray-300 dark:border-gray-600">
      <div>
        <h5 className="text-gray-500 dark:text-gray-500 font-semibold mb-2 text-xs uppercase">Point Test Response:</h5>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
