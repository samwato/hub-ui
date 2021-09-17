import React from 'react'
import { Icons } from '../ui'

export const TablePagination = ({ count, pageCount, rowCount, handleRowCount, handlePageCount }) => {

  const totalCount = count
  const firstView = ( ( pageCount - 1 ) * rowCount ) + 1
  const lastView = pageCount * rowCount > count ? count : pageCount * rowCount

  const rowOptions = [
    { name: '20', value: 20 },
    { name: '50', value: 50 },
    { name: '100', value: 100 },
    { name: 'All', value: count },
  ]

  const handlePage = (action) => {
    const totalPages = Math.ceil(count / rowCount)
    if (action === "next" && pageCount < totalPages) {
      handlePageCount(pageCount + 1)
    }
    if (action === "previous" && pageCount !== 1) {
      handlePageCount(pageCount - 1)
    }
  }

  return (
    <div className="w-full text-sm my-2 text-black dark:text-white">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center my-1">
          <span className="mx-2 whitespace-nowrap">Rows</span>
          <select
            className="standard-input p-2 h-auto cursor-pointer hover:shadow rounded-full"
            value={rowCount}
            onChange={(e) => handleRowCount(e.target.value)}>
            {rowOptions.map(({ name, value }) => <option key={name} value={value}>{name}</option>)}
          </select>
        </div>
        
        <div className="flex items-center my-1">
          <span className="mx-2 whitespace-nowrap">{firstView} - {lastView} of {totalCount}</span>
          <div className="flex">
            <button
              className="focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 dark:focus:ring-gray-800 w-8 h-8 rounded-full border border-gray-300 bg-transparent mx-1 hover:shadow"
              onClick={() => handlePage("previous")}>
              <div className="block ml-1">{Icons['pagination-left']}</div>
            </button>
            <button
              className="focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 dark:focus:ring-gray-800 w-8 h-8 rounded-full border border-gray-300 bg-transparent mx-1 hover:shadow"
              onClick={() => handlePage("next")}>
              <div className="block ml-1">{Icons['pagination-right']}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
