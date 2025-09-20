import React, { useState } from 'react'
import { UseTheme } from '../Hooks/UseTheme'
import { MdOutlinePushPin, MdPushPin } from 'react-icons/md'
import { BiCheck, BiEdit, BiTrash } from 'react-icons/bi'
import UseFormData from '../Hooks/UseFormData';

export default function Note() {
  const { theme } = UseTheme();
  const { state, dispatch } = UseFormData();
  const [editText, setEditText] = useState(false);
  const cardBg = theme ? 'bg-zinc-800' : 'bg-white';
  const textColor = theme ? 'text-white' : 'text-zinc-900';
  const [tilteText, setTitleText] = useState("");
  const [tilteDescription, setTitleDescription] = useState("");

  function handleEditText(e) {
    setTitleText(e.target.value);
    dispatch({ type: "EditNote", payload: tilteText })
  }
  console.log(tilteText)
  function handleEditDes(e) {
    setTitleDescription(e.target.value);
    dispatch({ type: "EditNote", payload: tilteDescription })
  }
  console.log(tilteDescription)
  return (
    <div className={`min-h-screen py-22 transition-colors duration-300 ease-in-out ${theme ? "bg-gradient-to-b from-gray-900 to-gray-800" : "bg-gradient-to-b from-gray-100 to-gray-200"}`}>
      <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 justify-center'>
        {state.length === 0 ? (
          <div className=''>
            <h1 className={`text-md ${theme ? "text-gray-50" : "text-gray-600"} text-center`}>No Notes Here Yet</h1>
          </div>
        ) : (
          state.map(item => {
            const date = item.id;
            const fullDate = new Date(date).toLocaleString("en-IN");
            return (
              <div
                key={item.id}
                className={`${item.pin ? "rotate-6" : ""} relative w-full max-w-[300px] p-6 rounded-3xl overflow-hidden mt-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${cardBg} ${textColor} border ${theme ? 'border-zinc-700' : 'border-gray-200'}`}>

                {/* Top Bar */}
                <div className='absolute top-0 left-0 w-full h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-t-3xl shadow-md flex items-center justify-between px-4'>
                  <button
                    className='cursor-pointer hover:scale-110 transition-transform duration-200'
                    onClick={() => dispatch({ type: "PinNote", payload: item })}
                  >
                    {item.pin ?
                      <MdPushPin color='white' size={20} className="transform -rotate-45 transition-transform" /> :
                      <MdOutlinePushPin color='white' size={20} className="transition-transform" />
                    }
                  </button>
                  <div className='flex items-center gap-3'>
                    <button
                      onClick={() => setEditText(!editText)}
                      className='cursor-pointer p-1 rounded-full hover:bg-white/20 transition-all duration-200'>
                      {editText ? (<BiCheck size={18} />) : (<BiEdit color='white' size={18} />)}
                    </button>
                    <button
                      onClick={() => dispatch({ type: "DeleteNote", payload: item })}
                      className='cursor-pointer p-1 rounded-full hover:bg-white/20 transition-all duration-200'>
                      <BiTrash color='white' size={18} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className='pt-8 pb-4'>
                  <h1 className='text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600'>{editText ?
                    (
                      <input
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        value={tilteText}
                        onChange={(e) => handleEditText(e)}
                        type="text" />
                    ) :
                    (item.title)}</h1>
                  <div className={`h-1 w-12 mb-4 rounded-full ${theme ? 'bg-emerald-700' : 'bg-emerald-400'}`}></div>
                  <p className={`text-md leading-relaxed mb-6 ${theme ? 'text-gray-300' : 'text-gray-600'}`}>
                    {editText ?
                      (
                        <input
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          value={tilteDescription}
                          onChange={(e) => handleEditDes(e)} type="text" />
                      ) :
                      (item.description)}
                  </p>
                  {/* Date */}
                  <div className='flex justify-end'>
                    <span className={`text-xs px-3 py-1 rounded-full ${theme ? 'bg-zinc-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                      {fullDate}
                    </span>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}