import React, { useState } from 'react'
import UseFormData from '../Hooks/UseFormData';
import { UseTheme } from '../Hooks/UseTheme';
import FormInterface from '../Components/FormInterface';

export default function Form({ setIsForm }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        id: Date.now(),
        pin: false,
    });
    const { dispatch } = UseFormData();
    const { theme } = UseTheme();

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
        <>
            <FormInterface
                form={form}
                theme={theme}
                setIsForm={setIsForm}
                handleTitle={handleTitle}
                handleDes={handleDes}
                handleFormSumbit={handleFormSumbit}
            />
        </>
    )
}
