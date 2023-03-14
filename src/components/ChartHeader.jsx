import React from 'react'

const ChartHeader = ({category,title,description}) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400">
        {category}
      </p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-gray-200">{title}</p>
      <p className="text-xl  tracking-tight text-slate-900 dark:text-gray-200 text-center">{description}</p>
    </div>
  )
}

export default ChartHeader