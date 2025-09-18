import React from 'react'
import { UseTheme } from '../Hooks/UseTheme'

export default function Note() {
  const { theme } = UseTheme();

  return (
    <div className={`py-22 h-screen transition-colors duration-300 ease-in-out ${theme ? "bg-gray-900 text-white" : ""}`}>
      <div className='max-w-6xl mx-auto'>
       
      </div>
    </div>
  )
}
