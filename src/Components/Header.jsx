import React from 'react'
import { UseTheme } from '../Hooks/UseTheme'
import { BiMoon, BiPlus, BiSun } from 'react-icons/bi';
import '../App.css';

export default function Header() {
  const {theme, handleTheme} = UseTheme();
  
  return (
    <header className={`grid h-screen transition-colors ease-in-out duration-300 ${theme ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className='fixed w-full top-0 left-0 mx-auto z-50'>
        <nav className={`px-8 py-4 ${theme ? "bg-gray-800 shadow-md" : "bg-gray-50 shadow-md"}`}>
          <div className='flex items-center justify-between max-w-6xl mx-auto'>
            <h1 className='text-3xl font-semibold'>NoteCraft</h1>
            <div className='flex items-center gap-4 text-white'>
              <button
              className='cursor-pointer p-2 bg-blue-600 rounded-full'
              ><BiPlus size={20}/></button>
            <button
            className='cursor-pointer p-2 bg-gray-600 rounded-full'
            onClick={handleTheme}
            >{theme ? (<BiMoon size={20}/>) : (<BiSun size={20}/>)}</button>
            </div>
            </div>
        </nav>
        </div>
    </header>
  )
}
