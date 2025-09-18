import React, { createContext, useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "CreateNote":
            return [...state, action.payload];
        default:
            return state;
    }
}

export const FormContext = createContext();

export default function FormProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, []);
    console.log(state)
    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    )
}
