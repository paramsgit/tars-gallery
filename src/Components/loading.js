import React from 'react'

const Loading = () => {
  return (
    <div className='pt-28 w-screen h-screen text-gray-900 dark:text-white flex justify-center'>
      <div className='flex flex-col items-center  text-gray-700/80 dark:text-white/30'>
        <span className="loader my-5"></span>
        Loading ...
        </div>
    </div>
  )
}

export default Loading