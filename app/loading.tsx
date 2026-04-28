import React from 'react'

const Loading = () => {
  return (
     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-linear-to-br from-purple-600 via-blue-600 to-indigo-600">
      <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
      <p className="mt-4 text-white font-bold text-lg">Loading...</p>
    </div>
  )
}

export default Loading