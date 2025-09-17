import React, { createContext, useReducer } from 'react'

const initialise = () => {
    Note: []
}

const reducer = (state, action) => {
    
}

export const FormContext = createContext();

export default function FormProvider({ chidren }) {
    const { state, dispatch } = useReducer(reducer, initialise);
    return (
        <FormContext.Provider value={{}}>
            {chidren}
        </FormContext.Provider>
    )
}
