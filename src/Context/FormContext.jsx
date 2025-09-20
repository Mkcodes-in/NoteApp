import React, { createContext, useEffect, useReducer } from 'react'

const getInitialise = () => {
    const data = localStorage.getItem("notes");
    return data ? JSON.parse(data) : [];
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CreateNote":
            return [...state, action.payload];

        case "PinNote":
            return state.map(item => item.id === action.payload.id ? { ...item, pin: !item.pin } : item);

        case "DeleteNote":
            return state.filter(item => item.id !== action.payload.id);

        case "EditNote":
            return state.map(item => item.id === action.payload.id ? { ...item, title: action.payload.title, description: action.payload.description } : item);

        default:
            return state;
    }
}

export const FormContext = createContext();

export default function FormProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, [], getInitialise);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(state));
    }, [state]);
    
    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    )
}
