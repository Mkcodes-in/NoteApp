import React, { useContext, useRef, useState } from 'react'
import { FaRegNoteSticky } from 'react-icons/fa6';
import UseFormData from '../Hooks/UseFormData';
import { UseTheme } from '../Hooks/UseTheme';

export default function Form({ setIsForm }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        id: Date.now(),
        pin: false,
    });
    const { dispatch } = UseFormData();
    const titleRef = useRef(null);
    const desRef = useRef(null);
    const { theme } = UseTheme();

    function handleTitleRef() {
        titleRef.current.focus();
    }
    function handleDesRef() {
        desRef.current.focus();
    }

    function handleTitle(e) {
        setForm({ ...form, title: e.target.value });
    }
    function handleDes(e) {
        setForm({ ...form, description: e.target.value });
    }
    function handleFormSumbit(e) {
        e.preventDefault();
        dispatch({ type: "CreateNote", payload: form })
        setIsForm(false);
        setForm({ title: "", description: "" });
    }

    return (
        <div
            className="fixed inset-0 bg-black/30 z-50 bg-opacity-50 flex items-center justify-center">
            <div className={`${theme ? "bg-zinc-800" : "bg-white"} rounded-xl shadow-2xl w-full max-w-md overflow-hidden`}>
                <div className='px-6 py-4 flex items-center justify-between'>
                    <h1 className={`text-3xl font-semibold ${theme ? "text-gray-50" : "text-gray-500"}`}>Create Note</h1>
                    <span><FaRegNoteSticky size={20} /></span>
                </div>
                <form
                    onSubmit={(e) => handleFormSumbit(e)}
                    className="px-6 pb-6">
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                            <label
                                onClick={handleTitleRef}
                                htmlFor="title"
                                className={`block text-sm font-medium ${theme ? "text-gray-50" : "text-gray-700"} cursor-pointer`}
                            >
                                Title
                            </label>
                            {/* <span className="text-xs text-gray-500">{title.length}/50</span> */}
                        </div>
                        <input
                            ref={titleRef}
                            required
                            id="title"
                            type="text"
                            value={form.title}
                            onChange={(e) => handleTitle(e)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Note title"
                        // maxLength={50}
                        />
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                            <label
                                onClick={handleDesRef}
                                htmlFor="des"
                                className={`block text-sm font-medium ${theme ? "text-gray-50" : "text-gray-700"} cursor-pointer`}
                            >
                                Description
                            </label>
                        </div>
                        <textarea
                            ref={desRef}
                            id="des"
                            required
                            value={form.description}
                            onChange={(e) => handleDes(e)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 h-32"
                            placeholder="Write your note here..."
                        />
                    </div>

                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={() => setIsForm(false)}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={!form.title.trim() || !form.description.trim()}
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors duration-200"
                        >
                            Save Note
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
